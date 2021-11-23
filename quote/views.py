import io
from django.http import FileResponse
from reportlab.pdfgen import canvas
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail
from .forms import NameForm, ContactForm


def get_name(request):
    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():

            return HttpResponse('thanks')
        else:
            return HttpResponseRedirect('/i-suck/')
    else:
        form = NameForm()

    return render(request, 'quote/name.html', {'form': form})


def thanks(request):
    message = 'this tranks is from thanks view, not from HttResponseRedirect'
    return HttpResponse(message)


def result(request):
    if 'your_name' in request.POST:
        message = 'you name is {name}'.format(name=request.POST['your_name'])
        print(request.POST)
    else:
        message = 'You submitted an empty form'
    return HttpResponse(message)

'''
def get_contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)

        if form.is_valid():
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']
            sender = form.cleaned_data['sender']
            cc_myself = form.cleaned_data['cc_myself']

            recipients = ['info@example.com']
            if cc_myself:
                recipients.append(sender)

            send_mail(subject, message, sender, recipients)
            return HttpResponseRedirect('/thanks/')
    else:
        form = ContactForm()

    return render(request, 'quote/contact.html', {'form': form})
'''


def get_contact(request):

    if request.method == 'POST':
        form = ContactForm(request.POST)

    else:
        form = ContactForm()

    return render(request, 'quote/contact.html', {'form': form})


def result_2(request):
    message = 'Sent successfully'
    return HttpResponse(message)


def proof(request):
    current_name = 'Andree G'
    return render(request, 'quote/proof.html', {'current_name': current_name})


def home(request):
    return render(request, 'quote/home.html')


def calculator(request):
    return render(request, 'quote/calculator.html')


def pdf(request):
    buffer = io.BytesIO()
    p = canvas.Canvas(buffer)
    p.setLineWidth(.3)
    p.setFont('Helvetica', 25)
    p.setStrokeColorRGB(255, 0, 0)
    p.setFillColorRGB(1, 0, 1)
    p.line(0, 0, 0, 1.7)
    p.line(0, 0, 1, 0)
    p.rect(0.2, 0.2, 1, 1.5, 1)
    p.rotate(90)
    p.setFillColorRGB(255, 0, 0, 0.7)
    if 'name' in request.POST:
        p.drawString(300, -100, 'you name is {name}'.format(name=request.POST['name']))
    else:
        p.drawString(300, -100, 'esta prueba falló')
    p.showPage()
    p.save()
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename="hello.pdf")

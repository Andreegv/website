import io
from django.http import FileResponse
from reportlab.pdfgen import canvas
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from django.core.mail import send_mail
from .forms import NameForm, ContactForm
from xhtml2pdf import pisa
from django.contrib.staticfiles import finders
from django.template.loader import get_template


def get_name(request):

    if request.method == 'POST':
        form = NameForm(request.POST)
        if form.is_valid():
            print('Hello')
            return HttpResponse('thanks a lot')
        else:
            return HttpResponse('i-suck')
    else:
        form = NameForm()
        context = {'form': form}

    return render(request, 'quote/name.html', context)


def thanks(request):
    message = 'this tranks is from thanks view, not from HttResponseRedirect'
    return HttpResponse(message)


def result(request):
    if 'your_name' in request.POST:
        message = 'you name is {name}'.format(name=request.POST['your_name'])

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
    print(request.POST)
    return render(request, 'quote/home.html')


def calculator(request):
    if request.method == 'POST':
        return HttpResponse(request.POST['coreI7'])

    else:
        return render(request, 'quote/calculator.html')


def quotePDF(request):
    print(request.POST)
    template_path = 'quote/quotePDF.html'

    rent = list(request.POST.values())[1]
    processor = list(request.POST.values())[2]
    quantity = list(request.POST.values())[3]
    duration = list(request.POST.values())[4]
    context = {
        'rent': rent,
        'processor': processor,
        'quantity': quantity,
        'duration': duration,
    }

    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="cotizacionOrugaRent.pdf"'
    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response )
    # if error then show some funy view
    if pisa_status.err:
        return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

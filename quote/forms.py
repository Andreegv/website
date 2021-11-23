from django import forms


class NameForm(forms.Form):
    your_name = forms.CharField(label='Your name', max_length=100)


class ContactForm(forms.Form):
    asunto = forms.CharField(max_length=100)
    mensaje = forms.CharField(widget=forms.Textarea)
    correo = forms.EmailField()
    CC = forms.BooleanField(required=False)
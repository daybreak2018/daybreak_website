from django import forms


class ContactForm(forms.Form):
    email = forms.EmailField(required=True, widget=forms.TextInput(attrs={'placeholder': 'Email ID'}))
    name = forms.CharField(required=True, widget=forms.TextInput(attrs={'placeholder': 'Full Name'}))
    message = forms.CharField(widget=forms.Textarea, required=True)
    service_type = forms.CharField(label='Name', required=True)
'''
from django.forms import ModelForm
from .models import contact
from django.forms.widgets import TextInput

class ContactForm(ModelForm):
	class Meta:
		model=contact
		fields = ['name','email','message']
		widgets = {
            'name': TextInput(attrs={'placeholder': 'FULL NAME'}),
            'email': TextInput(attrs={'placeholder': 'EMAIL'}),
            'message': CharField(attrs={'placeholder': 'MESSAGE'}),
        }'''





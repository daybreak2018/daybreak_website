from django.forms import ModelForm
from .models import contact
from django.forms.widgets import TextInput

class contactform(ModelForm):
	class Meta:
		model=contact
		fields = ['name','email','message']
		widgets = {
            'name': TextInput(attrs={'placeholder': 'FULL NAME'}),
            'email': TextInput(attrs={'placeholder': 'EMAIL'}),
            'message': TextInput(attrs={'placeholder': 'MESSAGE'}),
        }





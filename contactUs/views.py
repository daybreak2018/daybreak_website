'''from django.shortcuts import render
from django.views.generic import ListView, DetailView
from contactUs.models import contact

class PostListView(ListView):
	template_name = 'contactUs/email.html'
'''
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm


def email(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
	    name=form.cleaned_data.get("name")
	    email=form.cleaned_data.get("email")
	    message=form.cleaned_data.get("message")
            ##subject = form.cleaned_data['subject']
            ##from_email = form.cleaned_data['from_email']
            ##message = form.cleaned_data['message']
            try:
                send_mail(name, message, email, ['mdas.160395@gmail.com'])
		
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            return redirect('/')
    return render(request, 'contactUs/email.html', {'form': form})


def success(request):
    return HttpResponse('Success! Thank you for your message.')


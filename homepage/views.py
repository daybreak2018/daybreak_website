from django.shortcuts import render
from django.views.generic import ListView
from django.views.generic.edit import CreateView 
from models2 import Post
from homepage.forms import contactform
from homepage.models import contact
from django.shortcuts import redirect
from django.core.mail import send_mail
from django.conf import settings

class PostListAndFormView(CreateView,ListView):
	queryset = Post.objects.all().order_by("-date")[:2]
	template_name = 'personal/index.html' 
	object_list=None
	model=contact
	form_class=contactform
'''
	def form_valid(self, form):
		name=form.cleaned_data.get("name")
		email=form.cleaned_data.get("email")
		message=form.cleaned_data.get("message")
		send_mail(
    			'Message from Website',
    			name+' via '+ email + ' says ' + message,
    			settings.EMAIL_HOST_USER,
    			['mdas.160395@gmail.com'],
    			fail_silently=False,
)
		return redirect('/#header')
        
'''



	
        








		
		
        


        

	







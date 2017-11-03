from django.db import models
from django.db.models import permalink
from django.core.urlresolvers import reverse
from django.shortcuts import redirect
	
class contact(models.Model):
    name = models.CharField(max_length=25)   
    email = models.EmailField()
    message = models.CharField(max_length=200)











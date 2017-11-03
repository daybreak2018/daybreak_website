'''from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from contactUs.models import contact
from contactUs.views import PostListView



urlpatterns = [ 
                url(r'^$', PostListView.as_view(), name='PostListView'),
                url(r'^email$', DetailView.as_view(
                                    model = contact,
                                    template_name="contactUs/email.html")),
             ]
'''
from django.conf.urls import url

from . import views
'''
urlpatterns = [
    url(r'^email/$', views.email, name='email'),
]'''
urlpatterns = [
    url(r'^$', views.email, name='email'),
    url(r'success', views.success, name='success')
]
##

from django.conf.urls import url,include
from . import views
from homepage.views import PostListAndFormView

urlpatterns = [
	url(r'^$', PostListAndFormView.as_view(), name='PostListAndFormView'),
]



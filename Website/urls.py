
from django.conf.urls import url,include
from django.contrib import admin
from django.conf import settings
from contactUs import views as contact_views
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('homepage.urls')),
    url(r'^contactUs/', include('contactUs.urls')),
    url(r'^success/', contact_views.success)
    
]


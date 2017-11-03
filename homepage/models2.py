from django.db import models
from django.db.models import permalink

class Post(models.Model):
    title=models.CharField(max_length=140)
    body=models.TextField()
    PostImage=models.TextField()
    date=models.DateTimeField()
    
    def __str__(self):
        return self.title
    

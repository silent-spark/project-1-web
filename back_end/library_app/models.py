from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)     
    author = models.CharField(max_length=100)    
    category = models.CharField(max_length=100)   
    status = models.CharField(max_length=50, default='Available')

    def __str__(self):
        return self.title
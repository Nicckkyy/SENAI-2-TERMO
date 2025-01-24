from django.db import models

class Professor(models.Model):
    ni = models.CharField(max_length= 255)
    nome = models.CharField(max_length= 255)
    email = models.EmailField(max_length= 255)
    tel = models.CharField(max_length= 255)
    ocupacao = models.FloatField()
    

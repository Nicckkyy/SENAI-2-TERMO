from django.db import models


# sensores
class Sensores(models.Model):
    sensor = models.CharField(max_length=100)
    mac_address = models.CharField(max_length=100)
    unidade_med = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.BooleanField()

# ambientes
class Ambientes(models.Model):
    sig = models.IntegerField()
    descrocao = models.CharField(max_length=100)
    ni = models.CharField(max_length=100)
    responsavel = models.CharField(max_length=100)

# historico
class Historico(models.Model):
    valor = models.FloatField()
    timestamp = models.IntegerField()
    sensor = models.ForeignKey('Sensores', on_delete=models.CASCADE)
    ambiente = models.ForeignKey('Ambientes', on_delete=models.CASCADE)
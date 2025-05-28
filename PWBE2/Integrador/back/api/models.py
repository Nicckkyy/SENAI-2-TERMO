from django.db import models

# sensores
class Sensores(models.Model):
    TIPO_CHOICES = [
        ('temperatura', 'Temperatura (°C)'),
        ('umidade', 'Umidade (%)'),
        ('luminosidade', 'Luminosidade (lux)'),
        ('contador', 'Contador'),
    ]

    sensor = models.CharField(max_length=20, choices=TIPO_CHOICES)
    mac_address = models.CharField(max_length=100)
    unidade_med = models.CharField(max_length=20)
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.BooleanField(default=True, verbose_name="Está ativo?")


# ambientes
class Ambientes(models.Model):
    sig = models.CharField(max_length=100)
    descricao = models.CharField(max_length=100)
    ni = models.CharField(max_length=100)
    responsavel = models.CharField(max_length=100)

# historico
class Historico(models.Model):
    valor = models.FloatField()
    timestamp = models.DateTimeField()
    sensor = models.ForeignKey(Sensores, on_delete=models.CASCADE, related_name='medicoes')
    ambiente = models.ForeignKey(Ambientes, on_delete=models.CASCADE, related_name='medicoes')

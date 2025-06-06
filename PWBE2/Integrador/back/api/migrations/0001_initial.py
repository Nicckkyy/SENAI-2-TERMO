# Generated by Django 5.1.7 on 2025-05-28 18:53

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ambientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sig', models.CharField(max_length=100, unique=True)),
                ('descricao', models.CharField(max_length=100)),
                ('ni', models.CharField(max_length=100)),
                ('responsavel', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Sensores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sensor', models.CharField(choices=[('temperatura', 'Temperatura (°C)'), ('umidade', 'Umidade (%)'), ('luminosidade', 'Luminosidade (lux)'), ('contador', 'Contador')], max_length=20)),
                ('mac_address', models.CharField(max_length=100, unique=True)),
                ('unidade_med', models.CharField(max_length=20)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('status', models.BooleanField(default=True, verbose_name='Está ativo?')),
            ],
        ),
        migrations.CreateModel(
            name='Historico',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valor', models.FloatField()),
                ('timestamp', models.DateTimeField()),
                ('ambiente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicoes', to='api.ambientes')),
                ('sensor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicoes', to='api.sensores')),
            ],
        ),
    ]

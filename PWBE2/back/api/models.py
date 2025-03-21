from django.db import models

class Professor(models.Model):
    ni = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    tel = models.CharField(max_length=255)
    ocupacao = models.FloatField()


class Disciplinas(models.Model):
    disciplina = models.CharField(max_length=255)
    codigo = models.CharField(max_length=255)
    carga_horaria = models.CharField(max_length=255)

class Turma(models.Model):
    codigo = models.CharField(max_length=255)
    turma =  models.CharField(max_length=255)

class Curso(models.Model):
    Cursos = [
        ('CAT', 'Curso de Aprendiizagem Tecnica'),
        ('CT', 'Curso Tecnico'),
        ('FIC', 'Formação Iniciada e Continuada'),
        ('CS', 'Cuso Superior')
    ]
    codigo = models.CharField(max_length=255)
    cruso = models.CharField(max_length=255)
    tipo = models.CharField(max_length=3, choices= Cursos)
    hora_aula = models.CharField(max_length=255)
    sigla = models.CharField(max_length=255)

class Ambiente(models.Model):
    Periodos = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('S', 'Sábados')
    ]

    codigo = models.CharField(max_length=255)
    sala = models.CharField(max_length=255)
    capacidade =  models.CharField(max_length=255)
    reponsavel = models.CharField(max_length=255)
    periodo = models.CharField(max_length=1, choices= Periodos)

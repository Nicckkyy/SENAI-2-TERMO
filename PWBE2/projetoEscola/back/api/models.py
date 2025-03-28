from django.db import models

class Professor(models.Model):
    ni = models.CharField(max_length=255)
    nome = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    tel = models.CharField(max_length=255)
    ocupacao = models.FloatField()

class Diciplinas(models.Model):
    disciplina = models.CharField(max_length=255)
    codigo = models.CharField(max_length=255)
    carga_horaria = models.CharField(max_length=255)

class Turma(models.Model):
    codigo = models.CharField(max_length=255)
    turma = models.CharField(max_length=255)

class Curso(models.Model):
    CURSOS = [
        ('CAI', 'Curso de Aprendizagem Tecnica'),
        ('CT', 'Curso Tecnico'),
        ('FIC', 'Formação Inical e Continuada'),
        ('CS', 'Curso Superior')
    ]

    codigo = models.CharField(max_length=255)
    curso = models.CharField(max_length=255)
    tipo = models.CharField(max_length=3, choices=CURSOS, default="CT")
    hora_aula = models.TimeField()
    sigla = models.CharField(max_length=255)

class Ambiente(models.Model):
    PERIODO = [
        ('M', 'Manhã'),
        ('T', 'Tarde'),
        ('N', 'Noite'),
        ('S', 'Sabado')
    ]

    codigo = models.CharField(max_length=255)
    sala = models.CharField(max_length=255)
    capacidade = models.IntegerField()
    responsavel = models.CharField(max_length=255)
    turno = models.CharField(max_length=1, choices=PERIODO, default="M")

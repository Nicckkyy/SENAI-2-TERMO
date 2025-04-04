from django.db import models

class OrdemServico(models.Model):
    descricao = models.CharField(max_length=255)
    abertura = models.DateTimeField(auto_now= False, auto_now_add= False)
    fechamento = models.DateTimeField(auto_now= False, auto_now_add=False)
    status = models.CharField(max_length=255)
    patrimonio = models.CharField(max_length=255)
    ambiente = models.CharField(max_length=255)
    manutentor = models.CharField(max_length=255)
    responsavel = models.CharField(max_length=255)
    prioridade = models.CharField(max_length=255)


class Patrimonio(models.Model):
    ni = models.CharField(max_length=255)
    descricao = models.CharField(max_length=255)
    localizacao = models.CharField(max_length=255)


class Ambientes(models.Model):
    ni = models.CharField(max_length=255)    
    nome = models.CharField(max_length=255)


class Manutentores(models.Model):
    ni = models.CharField(max_length=255)        
    nome = models.CharField(max_length=255)        
    area = models.CharField(max_length=255)        
    gestor = models.CharField(max_length=255)  

class Gestores(models.Model):
    ni = models.CharField(max_length=255)          
    nome = models.CharField(max_length=255)          
    area = models.CharField(max_length=255)          
    cargo = models.CharField(max_length=255)     



class Responsaveis(models.Model):
    ni = models.CharField(max_length=255)    
    nome = models.CharField(max_length=255)   
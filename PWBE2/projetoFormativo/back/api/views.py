from django.shortcuts import render
from django.contrib.auth.models import User
from .models import OrdemServico, Patrimonio, Ambientes, Gestores, Responsaveis, Manutentores
from . serializers import OrdemServicoSerializer, PatrimonioSerializer, AmbientesSerializer, GestoresSerializer, ResponsaveisSerializer, ManutentoresSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework import generics
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# view
class OrdemServicoView(ListCreateAPIView):
    queryset = OrdemServico.objects.all()
    serializer_class = OrdemServicoSerializer
    permission_classes = [IsAuthenticated]

class PatrimonioView(ListCreateAPIView):
    queryset = Patrimonio.objects.all()
    serializer_class = PatrimonioSerializer
    permission_classes = [IsAuthenticated]

class AmbientesView(ListCreateAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]

class GestoresView(ListCreateAPIView):
    queryset = Gestores.objects.all()
    serializer_class = GestoresSerializer
    permission_classes = [IsAuthenticated]

class ResponsaveisView(ListCreateAPIView):
    queryset = Responsaveis.objects.all()
    serializer_class = ResponsaveisSerializer
    permission_classes = [IsAuthenticated]

class ManutentoresView(ListCreateAPIView):
    queryset = Manutentores.objects.all()
    serializer_class = ManutentoresSerializer
    permission_classes = [IsAuthenticated]

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# detailView
class OrdemServicoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = OrdemServico.objects.all()
    serializer_class = OrdemServicoSerializer
    permission_classes = [IsAuthenticated]


class PatrimonioDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Patrimonio.objects.all()
    serializer_class = PatrimonioSerializer
    permission_classes = [IsAuthenticated]


class AmbientesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]


class GestoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Gestores.objects.all()
    serializer_class = GestoresSerializer
    permission_classes = [IsAuthenticated]


class ResponsaveisDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Responsaveis.objects.all()
    serializer_class = ResponsaveisSerializer
    permission_classes = [IsAuthenticated]


class ManutentoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Manutentores.objects.all()
    serializer_class = ManutentoresSerializer
    permission_classes = [IsAuthenticated]
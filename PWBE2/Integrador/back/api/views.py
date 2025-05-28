from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from django_filters.rest_framework import DjangoFilterBackend
from openpyxl import load_workbook, Workbook
from .serializers import *
from .models import Sensores, Ambientes, Historico
from django.contrib.auth.models import User
from .filters import HistoricoFilter
from django.http import HttpResponse


# --- SENSORES ---

class SensoresView(ListCreateAPIView):
    queryset = Sensores.objects.all()
    serializers = SensoresSerializer
    permission_classes = [IsAuthenticated]

class SensoresDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Sensores.objects.all()
    serializers = SensoresSerializer
    permission_classes = [IsAuthenticated]

# --- AMBIENTES ---

class AmbientesView(ListCreateAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]

class AmbientesDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]

# --- HISTÓRICO ---

class HistoricoView(ListCreateAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [IsAuthenticated]

class HistoricoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [IsAuthenticated]

# --- USUÁRIOS ---

class SignUpView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# --- IMPORTAÇÃO DE PLANILHA XLSX (SENSORES) ---

class UploadXLSXSensoresView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({'error': 'Arquivo não enviado'}, status=400)

        wb = load_workbook(filename=file_obj)
        ws = wb.active

        for row in ws.iter_rows(min_row=2, values_only=True):
            sensor, mac_address, unidade_med, latitude, longitude, status = row
            try:
                Sensores.objects.create(
                    sensor=sensor.strip(),
                    mac_address=mac_address.strip(),
                    unidade_med=unidade_med.strip(),
                    latitude=float(latitude),
                    longitude=float(longitude),
                    status=status.strip().lower() in ['ativo', 'true', '1']
                )
            except Exception as e:
                print(f"Erro ao salvar sensor: {e}")
                continue

        return Response({'message': 'Sensores importados com sucesso!'})
    

class UploadXLSXAmbientesView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({'error': 'Arquivo não enviado'}, status=400)

        wb = load_workbook(filename=file_obj)
        ws = wb.active

        for row in ws.iter_rows(min_row=2, values_only=True):
            sig, descricao, ni, responsavel = row
            try:
                Ambientes.objects.create(
                    sig=sig.strip(),
                    descricao=descricao.strip(),
                    ni=ni.strip(),
                    responsavel=responsavel.strip()
                )
            except Exception as e:
                print(f"Erro ao salvar ambiente: {e}")
                continue

        return Response({'message': 'Ambientes importados com sucesso!'})

class UploadXLSXHistoricoView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request):
        file_obj = request.FILES.get('file')
        if not file_obj:
            return Response({'error': 'Arquivo não enviado'}, status=400)

        wb = load_workbook(filename=file_obj)
        ws = wb.active

        for row in ws.iter_rows(min_row=2, values_only=True):
            valor, timestamp, sensor, ambiente = row
            try:
                sensor_obj = Sensores.objects.get(sensor=sensor.strip())
                ambiente_obj = Ambientes.objects.get(sig=ambiente.strip())
                Historico.objects.create(
                    valor=float(valor),
                    timestamp=timestamp,
                    sensor=sensor_obj,
                    ambiente=ambiente_obj
                )
            except Exception as e:
                print(f"Erro ao salvar histórico: {e}")
                continue

        return Response({'message': 'Histórico importado com sucesso!'})
    

class ExportarXLSXSensoresView(APIView):
    def get(self, request):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="historico.xlsx"'

        wb = Workbook()
        ws = wb.active
        ws.title = "Sensores"

        ws.append(['Valor', 'Timestamp', 'Sensor', 'Ambiente'])

        historico = Historico.objects.all()
        for item in historico:
            ws.append([
                item.valor,
                item.timestamp,
                item.sensor.sensor,
                item.ambiente.sig
            ])

        wb.save(response)
        return response
    

class ExportarXLSXAmbientesView(APIView):
    def get(self, request):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="ambientes.xlsx"'

        wb = Workbook()
        ws = wb.active
        ws.title = "Sensores"

        ws.append(['Sigla', 'Descrição', 'NI', 'Responsável'])

        ambientes = Ambientes.objects.all()
        for ambiente in ambientes:
            ws.append([
                ambiente.sig,
                ambiente.descricao,
                ambiente.ni,
                ambiente.responsavel
            ])

        wb.save(response)
        return response
    

class ExportarXLSXHistoricoView(APIView):
    def get(self, request):
        response = HttpResponse(content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        response['Content-Disposition'] = 'attachment; filename="historico.xlsx"'

        wb = Workbook()
        ws = wb.active
        ws.title = "Histórico"

        ws.append(['Valor', 'Timestamp', 'Sensor', 'Ambiente'])

        historico = Historico.objects.all()
        for item in historico:
            ws.append([
                item.valor,
                item.timestamp,
                item.sensor.sensor,
                item.ambiente.sig
            ])

        wb.save(response)
        return response    


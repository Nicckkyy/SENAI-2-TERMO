from django.shortcuts import render
from .serializers import *
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser
from rest_framework import generics
# from django_filters.rest_framework import DjangoFilterBackend

class SensoresView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        sensores = Sensores.objects.all()
        serializer = SensoresSerializer(sensores, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SensoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class SensoresDetailView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        try:
            sensor = Sensores.objects.get(pk=pk)
        except Sensores.DoesNotExist:
            return Response({'error': 'Sensor não encontrado'}, status=404)

        serializer = SensoresSerializer(sensor)
        return Response(serializer.data)

    def put(self, request, pk):
        try:
            sensor = Sensores.objects.get(pk=pk)
        except Sensores.DoesNotExist:
            return Response({'error': 'Sensor não encontrado'}, status=404)

        serializer = SensoresSerializer(sensor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, pk):
        try:
            sensor = Sensores.objects.get(pk=pk)
        except Sensores.DoesNotExist:
            return Response({'error': 'Sensor não encontrado'}, status=404)
        sensor.delete()
        return Response({'message': 'Sensor excluído com sucesso'}, status=204)

class AmbientesView(generics.ListCreateAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]

class AmbientesDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ambientes.objects.all()
    serializer_class = AmbientesSerializer
    permission_classes = [IsAuthenticated]

class HistoricoView(generics.ListCreateAPIView):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [IsAuthenticated]
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['sensor', 'ambiente']

class HistoricoDetailView(generics.RetrieveUpdateDestroyAPIView):                                                                                                               
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer
    permission_classes = [IsAuthenticated]

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


# --- import de arquivos / população do banco de dados ---


# class UploadXLSXView(APIView):
#     parser_classes = [MultiPartParser]

#     def post(self, request):
#         file_obj = request.FILES.get('file')
#         if not file_obj:
#             return Response({'error': 'Arquivo não enviado'}, status=400)

#         wb = load_workbook(filename=file_obj)
#         ws = wb.active

#         for row in ws.iter_rows(min_row=2, values_only=True):
#             sensor, mac_address, unidade_med, latitude, longitude, status = row
#             try:
#                 Sensores.objects.create(
#                     sensor=sensor.strip(),
#                     mac_address=mac_address.strip(),
#                     unidade_med=unidade_med.strip(),
#                     latitude=float(latitude),
#                     longitude=float(longitude),
#                     status=status.strip().lower()
#                 )
#             except Exception as e:
#                 print(f"Erro ao salvar sensor: {e}")
#                 continue

#         return Response({'message': 'Sensores importados com sucesso!'})

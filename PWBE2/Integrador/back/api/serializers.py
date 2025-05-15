from rest_framework import serializers
from .models import Sensores, Ambientes, Historico
from django.contrib.auth.models import User

class SensoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensores
        fields = '__all__'

class AmbientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = '__all__'

class HistoricoSerializer(serializers.ModelSerializer):
    sensor = SensoresSerializer(read_only=True)
    sensor_id = serializers.PrimaryKeyRelatedField(queryset=Sensores.objects.all(), write_only=True)

    ambiente = AmbientesSerializer(read_only=True)
    ambiente_id = serializers.PrimaryKeyRelatedField(queryset=Ambientes.objects.all(), write_only=True)

    class Meta:
        model = Historico
        fields = ['id', 'sensor_id', 'sensor', 'ambiente_id', 'ambiente', 'valor', 'timestamp']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user

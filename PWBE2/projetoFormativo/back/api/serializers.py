from rest_framework import serializers
from django.contrib.auth.models import User
from .models import OrdemServico, Patrimonio, Ambientes, Manutentores, Gestores, Responsaveis

class OrdemServicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrdemServico
        fields = '__all__'


class PatrimonioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patrimonio
        fields = '__all__'


class AmbientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ambientes
        fields = '__all__'


class ManutentoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Manutentores
        fields = '__all__'


class GestoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gestores
        fields = '__all__'


class ResponsaveisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsaveis
        fields = '__all__'


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



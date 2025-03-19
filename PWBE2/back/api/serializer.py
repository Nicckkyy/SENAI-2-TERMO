from rest_framework import serializers
from .models import Professor, Disciplinas

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class DisciplinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'


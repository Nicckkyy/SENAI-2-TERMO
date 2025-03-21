from rest_framework import serializers
from .models import Professor, Disciplinas, Turma, Curso

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = '__all__'

class DisciplinasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disciplinas
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class CursoSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Curso
        fields = '__all__'

class AmbienteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Curso
        fields = '__all__'
from django.urls import path
from .views import listar_professores, ProfessoresView, ProfessoresDetailView, DisciplinaDetailView, DiciplinaView, TurmaView, TurmaDetailView, CursoView, CursoDetailView, AmbienteView, AmbienteDetailView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('professores', listar_professores),
    path('prof', ProfessoresView.as_view()),
    path('professor/<int:pk>', ProfessoresDetailView.as_view()),
    path('professor', ProfessoresDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("disciplinas/", DiciplinaView.as_view()),
    path('disciplina/', DisciplinaDetailView.as_view()),
    path('disciplina/<int:pk>', DisciplinaDetailView.as_view()),
    path('turmas/', TurmaView.as_view()),
    path('turma', TurmaDetailView.as_view()),
    path('turma/<int:pk>', TurmaDetailView.as_view()),
    path('cursos/', CursoView.as_view()),
    path('curso', CursoDetailView.as_view()),
    path('curso/<int:pk>', CursoDetailView.as_view()),
    path('ambientes/', CursoView.as_view()),
    path('ambiente',AmbienteDetailView.as_view()),
    path('ambiente/<int:pk>',AmbienteDetailView.as_view())
]


from django.urls import path
from .views import listar_professores, ProfessoresView, ProfessoresDetailView
urlpatterns = [
    path('professores', listar_professores),
    path('prof', ProfessoresView.as_view()),
    path('professor/<int:pk>', ProfessoresDetailView.as_view()),
]
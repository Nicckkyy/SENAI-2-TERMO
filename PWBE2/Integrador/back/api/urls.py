from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    # sensores
    path('sensores/', SensoresView.as_view(), name='sensores'),
    path('sensores/<int:pk>/', SensoresDetailView.as_view(), name='sensores_detail'),

    # ambientes
    path('ambientes/', AmbientesView.as_view(), name='ambientes'),
    path('ambientes/<int:pk>/', AmbientesDetailView.as_view(), name='ambientes_detail'),

    # historicos
    path('historico/', HistoricoView.as_view(), name='historico'),
    path('historico/<int:pk>/', HistoricoDetailView.as_view(), name='historico_detail'),

    
    path('signup/', SignUpView.as_view(), name='signup'), #sing up
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), #jwt
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), #auth
]
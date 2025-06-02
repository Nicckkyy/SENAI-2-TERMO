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


    # importação de planilha xlsx
    path('upload-sensores/', UploadXLSXSensoresView.as_view(), name='upload-sensores'),
    path('upload-ambientes/', UploadXLSXAmbientesView.as_view(), name='upload-ambientes'),
    path('upload-historico/', UploadXLSXHistoricoView.as_view(), name='upload-historico'),

    # exportação de planilha xlsx
    path('exportar-sensores/', ExportarXLSXSensoresView.as_view(), name='exportar-sensores'),
    path('exportar-ambientes/', ExportarXLSXAmbientesView.as_view(), name='exportar-ambientes'),
    path('exportar-historico/', ExportarXLSXHistoricoView.as_view(), name='exportar-historico'),

    # filtros
    path('sensores-filter/', SensoresFilterView.as_view(), name='sensores-filter'),
    path('ambientes-filter/', AmbientesFilterView.as_view(), name='ambientes-filter'),
    path('historico-filter/', HistoricoFilterView.as_view(), name='historico-filter'),

]
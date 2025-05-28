import django_filters
from .models import Historico, Ambientes


class HistoricoFilter(django_filters.FilterSet):
    sensor_id = django_filters.NumberFilter(field_name='sensor__id')
    tipo_sensor = django_filters.CharFilter(field_name='sensor__sensor', lookup_expr='icontains')
    data = django_filters.DateFilter(field_name='timestamp', lookup_expr='date')
    hora = django_filters.TimeFilter(field_name='timestamp', lookup_expr='time')
    ambiente_sig = django_filters.CharFilter(field_name='ambiente__sig', lookup_expr='icontains')
    historico_id = django_filters.NumberFilter(field_name='id')

    class Meta:
        model = Historico
        fields = [
            'sensor_id',
            'tipo_sensor',
            'data',
            'hora',
            'ambiente_sig',
            'historico_id',
        ]


class AmbienteFilter(django_filters.FilterSet):
    sig = django_filters.CharFilter(field_name='sig', lookup_expr='icontains')
    descricao = django_filters.CharFilter(field_name='descricao', lookup_expr='icontains')
    ni = django_filters.CharFilter(field_name='ni', lookup_expr='icontains')
    responsavel = django_filters.CharFilter(field_name='responsavel', lookup_expr='icontains')

    class Meta:
        model = Ambientes
        fields = [
            'sig',
            'descricao',
            'ni',
            'responsavel',
        ]


class SensoresFilter(django_filters.FilterSet):
    sensor = django_filters.CharFilter(field_name='sensor', lookup_expr='icontains')
    mac_address = django_filters.CharFilter(field_name='mac_address', lookup_expr='icontains')
    unidade_med = django_filters.CharFilter(field_name='unidade_med', lookup_expr='icontains')
    status = django_filters.BooleanFilter(field_name='status')

    class Meta:
        model = Historico
        fields = [
            'sensor',
            'mac_address',
            'unidade_med',
            'status',
        ]
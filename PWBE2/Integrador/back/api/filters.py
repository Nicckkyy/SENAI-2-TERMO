import django_filters
from .models import Historico, Ambientes, Sensores
from django.db.models.functions import TruncDate
from django.db.models.functions import ExtractHour



class HistoricoFilter(django_filters.FilterSet):
    sensor_id = django_filters.NumberFilter(field_name='sensor__id')
    tipo_sensor = django_filters.CharFilter(field_name='sensor__sensor', lookup_expr='icontains')
    ambiente_sig = django_filters.CharFilter(field_name='ambiente__sig', lookup_expr='icontains')
    historico_id = django_filters.NumberFilter(field_name='id')


    timestamp__date = django_filters.DateFilter(method='filter_by_date')
    timestamp__hour = django_filters.NumberFilter(method='filter_by_hour')

    def filter_by_date(self, queryset, name, value):
        return queryset.annotate(date=TruncDate('timestamp')).filter(date=value)

    def filter_by_hour(self, queryset, name, value):
        return queryset.annotate(hour=ExtractHour('timestamp')).filter(hour=value)

    class Meta:
        model = Historico
        fields = [
            'sensor_id',
            'tipo_sensor',
            'ambiente_sig',
            'historico_id',
            'timestamp__date',
            'timestamp__hour',
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
        model = Sensores
        fields = [
            'sensor',
            'mac_address',
            'unidade_med',
            'status',

        ]
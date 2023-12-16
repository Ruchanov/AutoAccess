import logging

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Car
from .serializers import CarSerializer
from rest_framework import generics


class CarListView(ListAPIView):
    serializer_class = CarSerializer

    def get_queryset(self):
        queryset = Car.objects.all()
        year = self.request.query_params.get('year')
        marka = self.request.query_params.get('marka')
        model = self.request.query_params.get('model')
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')
        min_mileage = self.request.query_params.get('min_mileage')
        max_mileage = self.request.query_params.get('max_mileage')

        if year:
            queryset = queryset.filter(year=year)
        if marka:
            queryset = queryset.filter(marka__icontains=marka)
        if model:
            queryset = queryset.filter(model__icontains=model)
        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)
        if min_mileage:
            queryset = queryset.filter(mileage__gte=min_mileage)
        if max_mileage:
            queryset = queryset.filter(mileage__lte=max_mileage)

        return queryset


class CarDetailView(RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


logger = logging.getLogger(__name__)


class CreateCarView(generics.CreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [IsAuthenticated]  # Только аутентифицированные пользователи могут создавать посты

    def perform_create(self, serializer):
        # Логируем пользователя, который пытается создать пост
        logger.debug(f"Creating car for user: {self.request.user}")
        serializer.save(user=self.request.user)  # Сохраняем пользователя как автора поста

    def create(self, request, *args, **kwargs):
        # Логируем данные запроса для отладки
        logger.debug(f"Request data: {request.data}")
        return super().create(request, *args, **kwargs)

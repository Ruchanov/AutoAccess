from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Car
from .serializers import CarSerializer
from rest_framework import generics


class CarListView(ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class CarDetailView(RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer





from django.urls import path
from .views import *

urlpatterns = [
    path('', CarListView.as_view(), name='car-list'),
    path('<int:pk>/', CarDetailView.as_view(), name='car-detail'),
    path('create/', CreateCarView.as_view(), name='create-car'),
]
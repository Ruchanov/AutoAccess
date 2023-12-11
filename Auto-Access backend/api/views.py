from rest_framework.viewsets import ModelViewSet

from api.models import Category, Product, SpareParts
from api.serializers import CategorySerializer, ProductSerializer, SparePartsSerializer


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class SparePartsViewSet(ModelViewSet):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer

from rest_framework.serializers import ModelSerializer

from api.models import Category, Product, SpareParts


class CategorySerializer(ModelSerializer):

    class Meta:
        model = Category
        fields = "__all__"


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = "__all__"


class SparePartsSerializer(ModelSerializer):

    class Meta:
        model = SpareParts
        fields = "__all__"

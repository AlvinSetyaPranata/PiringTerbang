from rest_framework.serializers import ModelSerializer
from .models import (
    Product,
    ProductCatagory
)

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1


class ProductCatagorySerializer(ModelSerializer):
    class Meta:
        model = ProductCatagory
        fields = '__all__'

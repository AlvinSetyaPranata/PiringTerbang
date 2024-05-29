from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import (
    Product,
    ProductCatagory
)
from .models import ProductCatagory

class ProductSerializer(ModelSerializer):
    catagory = PrimaryKeyRelatedField(queryset=ProductCatagory.objects.all())
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1


class ProductCatagorySerializer(ModelSerializer):
    class Meta:
        model = ProductCatagory
        fields = '__all__'

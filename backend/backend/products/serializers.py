from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import (
    Product,
    ProductCategory
)
from .models import ProductCategory

class ProductSerializer(ModelSerializer):
    category = PrimaryKeyRelatedField(queryset=ProductCategory.objects.all())
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1


class ProductCategorySerializer(ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = '__all__'

from django.shortcuts import render
from rest_framework.views import View
from rest_framework.response import Response
from products.models import (
    Product
)
# Create your views here.


class GetProduct(View):
    def get(self, _):

        data = Product.objects.all()

        return Response(data)
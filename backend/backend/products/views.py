from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from products.models import (
    Product, ProductCatagory
)
# Create your views here.


class ProductslView(APIView):
    def get(self, _):

        data = Product.objects.all()

        return Response(data)
    

    def post(self, request):
        data = request.POST


        print(data)


        return Response({})



class CatagoriesView(APIView):
    def get(self, _):
        data = ProductCatagory.objects.all()


        return Response(data)
    

    def post(self, request):
        data = request.POST

        print(data)


        return Response({})



from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from products.models import (
    Product, ProductCatagory
)
from .serializers import (
    ProductSerializer,
    ProductCatagorySerializer
)

class ProductslView(APIView):
    def get(self, _):

        data = Product.objects.all()

        return Response(data)
    

    def post(self, request):
        data = ProductSerializer(data=request.POST)
        
        if data.is_valid(raise_exception=True):
            return Response({"Messege" : f"Produk {data['name']}, telah ditambahkan"}, status=status.HTTP_201_CREATED)

        return Response({"Messege" : ""}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class CatagoriesView(APIView):

    def get(self, _):
        data = ProductCatagory.objects.all()


        return Response(data)
    

    def post(self, request):

        print(request.POST)

        data = ProductCatagorySerializer(data=request.POST)


        if data.is_valid(raise_exception=True):
            return Response({"Messege" : f"Catagory {data['name']}, telah ditambahkan"}, status=status.HTTP_201_CREATED)


        return Response({})



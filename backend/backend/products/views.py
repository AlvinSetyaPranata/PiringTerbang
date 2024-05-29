from rest_framework import status
# from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from products.models import (
    Product, ProductCatagory
)
from .serializers import (
    ProductSerializer,
    ProductCatagorySerializer
)

class ProductsView(GenericAPIView):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()


    def get(self, _):

        query_data = ProductSerializer(Product.objects.all(), many=True)

        return Response(query_data.data)

    

    def post(self, request):

        data = ProductSerializer(data=request.POST)
        
        if data.is_valid(raise_exception=True):
            data.save()
            return Response({"Messege" : "Produk baru, telah ditambahkan"}, status=status.HTTP_201_CREATED)

        return Response({"Messege" : ""}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



class CatagoriesView(GenericAPIView):
    serializer_class = ProductCatagorySerializer
    queryset = ProductCatagory.objects.all()


    def get(self, _):   
        query_data = ProductCatagorySerializer(ProductCatagory.objects.all(), many=True)

        return Response(query_data.data)
    

    def post(self, request):


        data = ProductCatagorySerializer(data=request.POST)


        if data.is_valid(raise_exception=True):
            data.save()

            return Response({"Messege" : "Catagori baru, telah ditambahkan"}, status=status.HTTP_201_CREATED)


        return Response({"Messege" : ""}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


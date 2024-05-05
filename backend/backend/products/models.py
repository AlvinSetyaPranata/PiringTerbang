from django.db import models

# Create your models here.
class ProductCatagory(models.Model):
    name = models.CharField(max_length=50)


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.IntegerField()
    quantity = models.IntegerField()
    catagory = models.ForeignKey(ProductCatagory, on_delete=models.CASCADE)
    date_product = models.DateTimeField(auto_now_add=True, editable=False)

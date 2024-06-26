from django.db import models

# Create your models here.
class ProductCategory(models.Model):

    name = models.CharField(max_length=50, unique=True)


    def __str__(self):
        return str(self.name)


class Product(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    price = models.IntegerField()
    quantity = models.IntegerField()
    category = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    date_product = models.DateTimeField(auto_now_add=True, editable=False)

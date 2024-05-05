from django.db import models


class User(models.Model):
    name = models.CharField(max_length=255)
    gender = models.CharField(max_length=1)
    age = models.IntegerField()
    email = models.EmailField()
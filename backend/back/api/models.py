from django.db import models

# Create your models here.

class Car(models.Model):
    marka = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    year = models.IntegerField()
    price = models.IntegerField()
    mileage = models.FloatField()
    body_type = models.CharField(max_length=255)
    transmission = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField()
    
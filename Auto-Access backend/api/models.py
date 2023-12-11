from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=255)
    model = models.CharField(max_length=255, default='Hyundai')
    price = models.FloatField()
    description = models.TextField(null=True)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, null=True, related_name='products')
    image = models.ImageField(null=True, blank=True, upload_to='product_images/')

    def __str__(self):
        return self.name


class SpareParts(models.Model):
    name = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField(null=True)
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE, null=True, related_name='spare_parts')
    image = models.ImageField(null=True, blank=True, upload_to='spare_parts_images/')

    def __str__(self):
        return self.name

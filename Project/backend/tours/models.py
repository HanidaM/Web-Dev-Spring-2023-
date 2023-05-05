from django.db import models

# Create your models here.
class Tour(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.CharField(max_length=255, blank=True, null=True)
    
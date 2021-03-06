from django.db import models
from django.contrib.auth.models import User


class Restaurant(models.Model):

    name = models.CharField(max_length=200)
    address = models.TextField()
    menu = models.TextField()
    pub_date = models.DateTimeField(auto_now_add=True)
    writer = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

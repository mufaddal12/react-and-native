
from django.contrib import admin
from django.urls import path, include
from .views import RestoApiView, login

from rest_framework import routers

restoRouter = routers.DefaultRouter()                      # add this
restoRouter.register('data', RestoApiView, 'resto')

"""userRouter = routers.DefaultRouter()
userRouter.register('login', Login, 'user')
"""
urlpatterns = [
    path('', include(restoRouter.urls)),
    path('<int:pk>/', include(restoRouter.urls)),
    path('login/', login)
]

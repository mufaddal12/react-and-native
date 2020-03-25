from .models import Restaurant
from .serializers import RestaurantSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class RestoApiView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer          # add this
    queryset = Restaurant.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request):
        rest_list = Restaurant.objects.order_by('-pub_date')
        serializer = RestaurantSerializer(rest_list, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = RestaurantSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        queryset = Restaurant.objects.order_by('-pub_date')
        resto = get_object_or_404(queryset, pk=pk)
        serializer = RestaurantSerializer(resto)
        return Response(serializer.data)

    def update(self, request, pk=None):
        resto = Restaurant.objects.get(pk=pk)
        serializer = RestaurantSerializer(resto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.erros, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login(request):
    print()
    print("here")
    print()
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'authenticate': ''},
                        status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'authenticate': ''})
    token, _ = Token.objects.get_or_create(user=user)
    response = {'authenticate': 'true', 'token': token.key}
    return Response(response,
                    status=status.HTTP_200_OK)

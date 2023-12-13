from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializer import UserRegistrationSerializer

class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer

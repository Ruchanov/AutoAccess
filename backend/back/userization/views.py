from requests import Response
from rest_framework import generics
from rest_framework.decorators import permission_classes, api_view
from rest_framework.permissions import IsAuthenticated

from .serializer import UserRegistrationSerializer, CustomTokenObtainPairSerializer, UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class UserRegistrationView(generics.CreateAPIView):
    serializer_class = UserRegistrationSerializer


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    user = request.user
    # Здесь можно сериализовать объект пользователя, чтобы отправить его данные на клиент
    serializer = UserSerializer(user)  # Предполагается, что у вас есть сериализатор UserSerializer
    return Response(serializer.data)

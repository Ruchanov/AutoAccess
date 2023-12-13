from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'password')

    def validate_password(self, value):
        validate_password(value)
        return value


    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
from rest_framework import serializers
from django.contrib.auth.models import User, Permission, Group
from django.contrib.auth import authenticate

class PasswordSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def create(self, validated_data):
        pass
    def update(self, instance, validated_data):
        pass
    def validate(self, data):
        """ check that username and new password are different """
        if data["username"] == data["password"]:
            raise serializers.ValidationError("Username and new password should be different")
        return data
# PERMISSIONS
class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = ('name',)
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#  Group Serializer
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')
# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user
# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")






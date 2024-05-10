from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import (
    IsAdminUser,
    IsAuthenticated
)
from rest_framework.response import Response

from .serializers import (
    UserSerializer
)
from .models import (
    User
)

# Admin dashboard data
class UsersView(APIView):
    permission_classes = [IsAdminUser]


    def get(self, _):
        users = UserSerializer(User.objects.all())

        return Response(users)
    
# User client dashboard data
class UserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Do JWT auth

        user = User.objects.filter(name=request.POST["name"])

        user_data = UserSerializer(user)

        return 
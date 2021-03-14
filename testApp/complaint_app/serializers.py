from django.contrib.auth.models import User
from .models import UserProfile, Complaint
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'first_name','last_name')

class UserProfileSerializer(serializers.ModelSerializer):
    # BONUS Task: Flatten out the User object inside of UserProfile.
     
    # User(*, is_superuser, groups, user_permissions, password, last_login, username, email, is_active, first_name, last_name, is_staff, date_joined)
    
    username = serializers.CharField(source='user.username')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')
    email = serializers.EmailField(source='user.email')
    is_staff = serializers.BooleanField(source='user.is_staff')
    date_joined = serializers.DateTimeField(source='user.date_joined')
    last_login = serializers.DateTimeField(source='user.last_login')

    class Meta:
        model = UserProfile
        fields = ('id','user','full_name','district','party','borough', 'username', 'first_name', 'last_name', 'email', 'is_staff', 'date_joined', 'last_login')

class ComplaintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Complaint
        fields = ('unique_key','account','opendate','complaint_type','descriptor','zip','borough','city','council_dist','community_board','closedate')
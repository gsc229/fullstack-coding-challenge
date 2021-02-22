from rest_framework import viewsets
from .models import UserProfile, Complaint
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status
from django.db.models import Count
# Create your views here.

def getDistrictString(user):
  userprofile = UserProfile.objects.filter(user=user).first()
  dist_num = getattr(userprofile, 'district')
  return f"NYCC0{dist_num}" if len(dist_num) == 1 else f"NYCC{dist_num}"


class ComplaintViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get all complaints from the user's district
    user_dist = getDistrictString(request.user)
    queryset = self.queryset.filter(account=user_dist)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response({'success': True, 'data': serializer.data})

class OpenCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    #Get only the open complaints from the user's district
    user_dist = getDistrictString(user=request.user)
    queryset = self.queryset.filter(account=user_dist, closedate__isnull=True)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response({'success': True, 'data': serializer.data})

class ClosedCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get only complaints that are close from the user's district
    user_dist = getDistrictString(user=request.user)
    queryset = self.queryset.filter(account=user_dist, closedate__isnull=False)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response({'success': True, 'data': serializer.data})
    
class TopComplaintTypeViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get the top 3 complaint types from the user's district
    user_dist = getDistrictString(user=request.user)
    annotatedSet = self.queryset.filter(complaint_type__isnull=False, account=user_dist).values('complaint_type').order_by('complaint_type').annotate(count=Count('complaint_type')).order_by('-count')
    top_three =  [complaint['complaint_type'] for complaint in annotatedSet[:3]]
    return Response({"success": True, "top_three": top_three, "data": annotatedSet})

class ConsituentCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get only complaints that are from a council member's constituents
    user_dist = getDistrictString(user=request.user)
    queryset = self.queryset.filter(council_dist=user_dist)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response({'success': True, 'data': serializer.data})

class UserProfileViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = UserProfileSerializer
  queryset = UserProfile.objects.all()

  @action(methods=['get'], detail=False,  url_path='get-profile')
  def getByUsername(self, request):
      userId = get_object_or_404(User, username=request.user).__getattribute__('id')
      userprofile = self.queryset.get(pk=userId)
      serializer = UserProfileSerializer(userprofile, many=False)
      return Response({'success': True,  'data': serializer.data}, status=status.HTTP_200_OK)
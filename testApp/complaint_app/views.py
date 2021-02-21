from rest_framework import viewsets
from .models import UserProfile, Complaint
from .serializers import UserSerializer, UserProfileSerializer, ComplaintSerializer
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
# Create your views here.

def getDistrictString(userprofile):
  dist_num = getattr(userprofile, 'district')
  return f"NYCC0{dist_num}" if len(dist_num) == 1 else f"NYCC{dist_num}"

class ComplaintViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()
  def get_queryset(self):
    print(self.kwargs)
    print(self.get_extra_action_url_map)
    userprofile = UserProfile.objects.filter(user=self.request.user).first()
    user_dist = getDistrictString(userprofile)
    queryset = Complaint.objects.filter(account=user_dist)
    return queryset

  def list(self, request):
    # Get all complaints from the user's district
    queryset = self.get_queryset()
    serializer = ComplaintSerializer(queryset, many=True)
    return Response(serializer.data)

class OpenCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    #Get only the open complaints from the user's district
    userprofile = UserProfile.objects.filter(user=request.user).first()
    user_dist = getDistrictString(userprofile)
    queryset = self.queryset.filter(account=user_dist, closedate__isnull=True)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response(serializer.data)

class ClosedCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get only complaints that are close from the user's district
    userprofile = UserProfile.objects.filter(user=request.user).first()
    user_dist = getDistrictString(userprofile)
    queryset = self.queryset.filter(account=user_dist, closedate__isnull=False)
    serializer = ComplaintSerializer(queryset, many=True)
    return Response(serializer.data)
    
class TopComplaintTypeViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    # Get the top 3 complaint types from the user's district
    userprofile = UserProfile.objects.filter(user=request.user).first()
    user_dist = getDistrictString(userprofile)
    annotatedSet = self.queryset.filter(complaint_type__isnull=False).values('complaint_type').order_by('complaint_type').annotate(count=Count('complaint_type')).order_by('-count')
        
    return Response(annotatedSet)
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
  """ 
  From the user's profile finds the district and then converts the district into a 
  string with a leading zero if the district number is a single digit.
  """
  userprofile = UserProfile.objects.filter(user=user).first()
  dist_num = getattr(userprofile, 'district')
  return f"NYCC0{dist_num}" if len(dist_num) == 1 else f"NYCC{dist_num}"


class AllCasesViewSet(viewsets.ModelViewSet):
  http_method_names = ['get']
  serializer_class = ComplaintSerializer
  queryset = Complaint.objects.all()

  def list(self, request):
    queryset = self.queryset
    serializer = ComplaintSerializer(queryset, many=True)
    return Response({ 'success': True, 'total_cases': len(serializer.data), 'data': serializer.data})

  
  @action(methods=['get'], detail=False,  url_path='type-totals')
  def getTypeTotals(self, request):
    """ Returns a tally of all the types in the database  """

    annotatedSet = self.queryset \
                  .filter(complaint_type__isnull=False) \
                  .values('complaint_type').order_by('complaint_type') \
                  .annotate(count=Count('complaint_type')).order_by('-count')

    return Response({ 'success': True, 'total_cases': len(self.queryset), 'num_types': len(annotatedSet), 'data': annotatedSet })
  
  
  @action(methods=['get'], detail=False,  url_path='zip-totals')
  def getZipcodeTotals(self, request):
    """ Returns the number of ALL complaints from ALL zipcodes """

    annotatedSet = self.queryset \
                  .filter(zip__isnull=False) \
                  .values('zip') \
                  .order_by('zip') \
                  .annotate(count=Count('zip')) \
                  .order_by('-count')

    return Response({ 'success': True, 'total_cases': len(self.queryset), 'num_zips': len(annotatedSet), 'data': annotatedSet })


  
  @action(methods=['get'], detail=False,  url_path='zip-and-type')
  def getZipsAndTypes(self, request):
    """ Returns a breakdown of all the complaint types in ALL zipcodes, OR a single zipcode if a query parameter is provided ex. ?zipcode=11208 """
    #single
    if self.request.query_params:
      zipcode = self.request.query_params['zipcode']
      zipQuery = self.queryset.filter(zip=zipcode).values()
      annotatedZipTypes = zipQuery \
                          .values('complaint_type') \
                          .order_by('complaint_type') \
                          .annotate(count=Count('complaint_type')) \
                          .order_by('-count') \
                          .all()
      
      return Response({ 'success': True, 'data': { f'{zipcode}': { annotatedZipTypes }} })
    
    #all
    annotatedSet = self.queryset \
                  .filter(zip__isnull=False) \
                  .values('zip') \
                  .order_by('zip') \
                  .annotate(count=Count('zip')) \
                  .order_by('-count')
    zipsTypes = []
    for zipCode in annotatedSet:
      zipQueryset = self.queryset.filter(zip=zipCode['zip'])
      annotatedZip = zipQueryset \
                    .values('complaint_type') \
                    .order_by('complaint_type') \
                    .annotate(count=Count('complaint_type')) \
                    .order_by('-count') \
                    .all()
      zipsTypes.append({ "zip": zipCode["zip"], "breakdown": annotatedZip })

    return Response({ 'success': True, 'total_cases': len(self.queryset), 'num_zips': len(annotatedSet), 'data': zipsTypes })

  
  @action(methods=['get'], detail=False,  url_path='borough-totals')
  def getBoroughTotals(self, request):
    """ Returns the total of ALL complaints in ALL boroughs """

    annotatedSet = self.queryset \
                  .filter(borough__isnull=False) \
                  .values('borough') \
                  .order_by('borough') \
                  .annotate(count=Count('borough')) \
                  .order_by('-count')

    return Response({ 'success': True, 'total_cases': len(self.queryset), 'num_boroughs': len(annotatedSet), 'data': annotatedSet })

  
  @action(methods=['get'], detail=False,  url_path='borough-and-type')
  def getBoroughsAndTypes(self, request):
    """ Returns a breakdown of all the complaint types in ALL boroughs, OR a single borough if a query parameter is provided ex. ?borough=Manhattan """

    #single
    if self.request.query_params:
      borough = self.request.query_params['borough']
      zipQuery = self.queryset.filter(borough=borough).values()
      annotatedBoroughTypes = zipQuery \
                              .values('complaint_type') \
                              .order_by('complaint_type') \
                              .annotate(count=Count('complaint_type')) \
                              .order_by('-count') \
                              .all()

      return Response({ 'success': True, 'data': { f'{borough}': { annotatedBoroughTypes }} })
    
    #all
    annotatedSet = self.queryset \
                  .filter(zip__isnull=False) \
                  .values('borough') \
                  .order_by('borough') \
                  .annotate(count=Count('borough')) \
                  .order_by('-count')

    boroughsTypes = []
    for boroughCode in annotatedSet:
      boroughQueryset = self.queryset.filter(borough=boroughCode['borough'])
      annotatedborough = boroughQueryset \
                        .values('complaint_type') \
                        .order_by('complaint_type') \
                        .annotate(count=Count('complaint_type')) \
                        .order_by('-count') \
                        .all()

      boroughsTypes.append({boroughCode['borough']: annotatedborough})
    

    return Response({ 'success': True, 'total_cases': len(self.queryset), 'num_boroughs': len(annotatedSet), 'data': boroughsTypes })


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
    annotatedSet = self.queryset \
                  .filter(complaint_type__isnull=False, account=user_dist) \
                  .values('complaint_type') \
                  .order_by('complaint_type') \
                  .annotate(count=Count('complaint_type')) \
                  .order_by('-count')

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
from django.urls import path
from rest_framework import routers
from .views import ComplaintViewSet, OpenCasesViewSet, ClosedCasesViewSet, TopComplaintTypeViewSet

router = routers.SimpleRouter()
router.register(r'openCases', OpenCasesViewSet, basename='openCases')
router.register(r'closedCases', ClosedCasesViewSet, basename='closedCases')
router.register(r'topComplaints', TopComplaintTypeViewSet, basename='topComplaints')
router.register(r'', ComplaintViewSet, basename='complaint')
urlpatterns = [
]

urlpatterns += router.urls

print(urlpatterns)


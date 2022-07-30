from django.urls import path, include
from .views import demo, helloWorldClass
from rest_framework import routers
from .views import PdcaModelViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'pdcaes', PdcaModelViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('demo/', demo),
    path('hello/', helloWorldClass.as_view())
]


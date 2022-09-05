from rest_framework import routers
from .views import PdcaViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'pdcaes', PdcaViewSet)
router.register(r'users', UserViewSet)

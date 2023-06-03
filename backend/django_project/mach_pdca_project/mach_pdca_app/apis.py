from rest_framework import routers
from .views import PdcaModelViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'pdcaes', PdcaModelViewSet)
router.register(r'users', UserViewSet)
# コメントアウト

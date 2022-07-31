from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from mach_pdca_app.apis import router as app_api_router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(app_api_router.urls)),
    path('',include('mach_pdca_app.urls')),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


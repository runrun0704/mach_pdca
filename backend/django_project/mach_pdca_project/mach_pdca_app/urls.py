from django.urls import path, include
from .views import demo

urlpatterns = [
    path('demo/', demo)
]
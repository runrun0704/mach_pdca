from django.urls import path, include
from .views import demo, helloWorldClass

urlpatterns = [
    path('demo/', demo),
    path('hello/', helloWorldClass.as_view())
]
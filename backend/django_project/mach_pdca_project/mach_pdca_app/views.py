from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
import django_filters
from rest_framework import viewsets, filters
from .models import Pdca,User,Tag
from .serializer import PdcaSerializer, UserSerializer

# Create your views here.
def demo(request):
    return HttpResponse("Hello")

class helloWorldClass(TemplateView):
    template_name = 'hello.html'

class PdcaViewSet(viewsets.ModelViewSet):
    queryset = Pdca.objects.all()
    serializer_class = PdcaSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

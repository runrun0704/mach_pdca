from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
import django_filters
from rest_framework import viewsets, filters
from .models import PdcaModel,User,Tag
from .serializer import PdcaModelSerializer, UserSerializer

# Create your views here.
def demo(request):
    return HttpResponse("Hello")

class helloWorldClass(TemplateView):
    template_name = 'hello.html'

class PdcaModelViewSet(viewsets.ModelViewSet):
    queryset = PdcaModel.objects.all()
    serializer_class = PdcaModelSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

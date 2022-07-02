from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView

# Create your views here.
def demo(request):
    return HttpResponse("Hello")

class helloWorldClass(TemplateView):
    template_name = 'hello.html'
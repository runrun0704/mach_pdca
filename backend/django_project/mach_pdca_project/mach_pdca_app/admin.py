from django.contrib import admin
from .models import PdcaModel,User,Condition,Tag

# Register your models here.
admin.site.register(PdcaModel)
admin.site.register(User)
admin.site.register(Condition)
admin.site.register(Tag)
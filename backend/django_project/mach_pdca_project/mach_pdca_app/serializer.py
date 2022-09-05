from rest_framework import serializers
from .models import Pdca,User,Tag

class PdcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pdca
        fields = ('p','d','c','a','title','goal','deadline','weight','comment','condition','tag_name','user_name','created','updated','id')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')

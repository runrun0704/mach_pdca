from rest_framework import serializers
from .models import PdcaModel,User,Condition,Tag

class PdcaModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PdcaModel
        fields = ('p','d','c','a','title','goal','deadline','weight','comment','condition','tag_name','user_name','created','updated','id')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')    
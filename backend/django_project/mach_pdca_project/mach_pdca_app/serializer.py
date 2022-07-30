from rest_framework import serializers
from .models import PdcaModel,User,Condition,Tag

class PdcaModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = PdcaModel
        fields = ('p','d','c','a')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name')    
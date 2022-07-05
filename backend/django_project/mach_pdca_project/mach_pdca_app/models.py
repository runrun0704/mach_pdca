from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class PdcaModel(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    updated = models.DateTimeField(auto_now_add = True)
    title = models.CharField(max_length = 20)
    goal = models.CharField(max_length = 20)
    Memo = models.TextField()
    deadline = models.DateField()
    p = models.TextField()
    d = models.TextField()
    c = models.TextField()
    a = models.TextField()
    weight = models.IntegerField(validators = [MinValueValidator(0),MaxValueValidator(2)])
    comment = models.TextField()

class User(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    updated = models.DateTimeField(auto_now_add = True)
    name = models.CharField(max_length = 50)
    password = models.CharField(max_length = 10,blank=True, null=True,validators=[MinValueValidator(4)])

class Condition(models.Model):
    id = models.AutoField(primary_key = True)
    pdca_id = models.IntegerField()
    condition = models.IntegerField(validators = [MinValueValidator(0),MaxValueValidator(2)])

class Tag(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    pdca_id = models.IntegerField()
    name = models.CharField(max_length = 20)

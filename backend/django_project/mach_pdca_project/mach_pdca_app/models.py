from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    updated = models.DateTimeField(auto_now_add = True)
    name = models.CharField(max_length = 50)
    password = models.CharField(max_length = 10,blank=True, null=True)

CONDITION = (
    (1, 'Preparation'),
    (2, 'Open'),
    (3, 'Close')
)

class Condition(models.Model):
    id = models.AutoField(primary_key = True)
    condition = models.IntegerField(choices = CONDITION,null = True, blank = True)

    def __str__(self):
        return str(self.condition)

class Tag(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    name = models.CharField(max_length = 20, null = True, blank = True)

    def __str__(self):
        return self.name

LEVEL = (
    (1, 'Light'),
    (2, 'Middle'),
    (3, 'Heavy')
)

class PdcaModel(models.Model):
    id = models.AutoField(primary_key = True)
    created = models.DateTimeField(auto_now = True)
    updated = models.DateTimeField(auto_now_add = True)
    title = models.CharField(max_length = 20)
    goal = models.CharField(max_length = 20)
    Memo = models.TextField(null = True)
    deadline = models.DateField()
    p = models.TextField()
    d = models.TextField(null = True)
    c = models.TextField(null = True)
    a = models.TextField(null = True)
    weight = models.IntegerField(choices = LEVEL, null = True)
    comment = models.TextField(null = True)
    condition = models.ForeignKey(Condition, on_delete = models.CASCADE ,blank = True ,default = "", null = True)
    tag_name = models.ManyToManyField(Tag, blank = True, default = "", null = True)

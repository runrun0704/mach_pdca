# Generated by Django 4.0 on 2022-08-06 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mach_pdca_app', '0004_pdcamodel_condition_pdcamodel_tag_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pdcamodel',
            name='weight',
            field=models.IntegerField(choices=[(1, 'Light'), (2, 'Middle'), (3, 'Heavy')], null=True),
        ),
    ]

# Generated by Django 4.0 on 2022-08-06 07:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mach_pdca_app', '0005_alter_pdcamodel_weight'),
    ]

    operations = [
        migrations.AlterField(
            model_name='condition',
            name='condition',
            field=models.IntegerField(blank=True, choices=[(1, 'Preparation'), (2, 'Open'), (3, 'Close')], null=True),
        ),
    ]

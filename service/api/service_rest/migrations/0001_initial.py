# Generated by Django 4.0.3 on 2023-06-09 14:43

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Technician',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, null=True, unique=True)),
                ('employeeno', models.PositiveSmallIntegerField(null=True, unique=True)),
            ],
            options={
                'verbose_name': 'Technician',
                'verbose_name_plural': 'Technicians',
            },
        ),
        migrations.CreateModel(
            name='ValuedVINVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('import_href', models.URLField(blank=True, max_length=50)),
                ('valvin', models.CharField(max_length=17, unique=True, validators=[django.core.validators.MinLengthValidator(17)])),
            ],
            options={
                'verbose_name': 'Valued Customer Car',
                'verbose_name_plural': 'Valued Customer Cars',
            },
        ),
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('custname', models.CharField(max_length=200, null=True)),
                ('date', models.DateField(blank=True, null=True)),
                ('time', models.TimeField(null=True)),
                ('reason', models.CharField(max_length=400, null=True)),
                ('vin', models.CharField(max_length=17, null=True, validators=[django.core.validators.MinLengthValidator(17)])),
                ('valued', models.BooleanField(default=False)),
                ('active', models.BooleanField(default=True)),
                ('cancelled', models.BooleanField(default=False)),
                ('finished', models.BooleanField(default=False)),
                ('technician', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='technicians', to='service_rest.technician')),
            ],
            options={
                'verbose_name': 'Service Appointment',
                'verbose_name_plural': 'Service Appointments',
            },
        ),
    ]

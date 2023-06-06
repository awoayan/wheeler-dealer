from django.contrib import admin
from .models import ValuedVINVO, Technician, Appointment


@admin.register(ValuedVINVO)
class AutomobileVINVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    pass

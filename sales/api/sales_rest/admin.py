from django.contrib import admin
from .models import Salesperson, Sale, Costumer, AutomobileVO


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):
    pass


@admin.register(Salesperson)
class SalespersonAdmin(admin.ModelAdmin):
    pass


@admin.register(Costumer)
class CostumerAdmin(admin.ModelAdmin):
    pass


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass

from .models import Salesperson, Sale, AutomobileVO, Costumer
from django.views.decorators.http import require_http_methods
import json


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    people = Salesperson.objects.all()

from .models import Salesperson, Sale, AutomobileVO, Customer
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from .encoders import SalesPersonEncoder
import json


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method=="POST":
        try:
            body = json.loads(request.body)
            response = Salesperson.objects.create(**body)
        except AttributeError:
            response = JsonResponse({"message": "Invalid Salesperson creation information. I am now teapot."})
            response.status_code = 418
            return response
    else:
        response = Salesperson.objects.all()

    return JsonResponse(
        response,
        encoder=SalesPersonEncoder,
        safe=False
    )


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method=="POST":
        try:
            body = json.loads(request.body)
            response = Salesperson.objects.create(**body)
        except AttributeError:
            response = JsonResponse({"message": "Invalid Customer creation information. I am now teapot."})
            response.status_code = 418
            return response
    else:
        response = Customer.objects.all()

    return JsonResponse(
        response,
        encoder=SalesPersonEncoder,
        safe=False
    )

from .encoders import SalesPersonEncoder, CustomerEncoder, SaleEncoder
from .models import Salesperson, Sale, Customer, AutomobileVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json


@require_http_methods(["GET", "POST"])
def list_salespeople(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            response = Salesperson.objects.create(**body)
        except AttributeError:
            response = JsonResponse(
                {"message": "Invalid Salesperson creation information."}
            )
            response.status_code = 400
            return response
    else:
        response = Salesperson.objects.all()

    return JsonResponse(
        {"salespeople": response}, encoder=SalesPersonEncoder, safe=False
    )


@require_http_methods(["GET", "PUT", "DELETE"])
def salesperson(request, id):
    try:
        person = Salesperson.objects.get(id=id)

    except Salesperson.DoesNotExist:
        response = JsonResponse(
            {"message": "That Salesperson does not exist. Verify the url/id."}
        )
        response.status_code = 404
        return response

    if request.method == "DELETE":
        person, _ = Salesperson.objects.get(id=id).delete()
        check = person > 0
        response = JsonResponse({"deleted": check})
        if check:
            response.status_code = 200
            return response

    elif request.method == "GET":
        person = Salesperson.objects.get(id=id)
        return JsonResponse(
            {"salespeople": person}, encoder=SalesPersonEncoder, safe=False
        )

    return JsonResponse({"need a put method still": True})


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "POST":
        try:
            body = json.loads(request.body)
            response = Customer.objects.create(**body)

        except AttributeError:
            response = JsonResponse(
                {"message": "Invalid Customer creation information."}
            )
            response.status_code = 400
            return response

    else:
        response = Customer.objects.all()

    return JsonResponse({"customers": response}, encoder=CustomerEncoder, safe=False)


@require_http_methods(["GET", "DELETE"])
def customer(request, id):
    try:
        person = Customer.objects.get(id=id)

    except Customer.DoesNotExist:
        response = JsonResponse(
            {"message": "That Customer does not exist. Verify the url & id."}
        )
        response.status_code = 404
        return response

    if request.method == "DELETE":
        person, _ = Customer.objects.get(id=id).delete()
        return JsonResponse({"deleted": person > 0})

    else:
        person = Customer.objects.get(id=id)
        return JsonResponse({"customer": person}, encoder=CustomerEncoder, safe=False)


@require_http_methods(["GET", "POST"])
def list_sales(request):
    if request.method == "POST":
        try:
            sale_info = json.loads(request.body)
            try:
                customer = Customer.objects.get(id=sale_info["customer"])
                sale_info["customer"] = customer

                sales_person = Salesperson.objects.get(
                    employee_id=sale_info["salesperson"]
                )
                sale_info["salesperson"] = sales_person

                auto = AutomobileVO.objects.get(vin=sale_info["automobile"])
                sale_info["automobile"] = auto

                response = Sale.objects.create(**sale_info)

            except Customer.DoesNotExist:
                response = JsonResponse({"message": "Invalid Customer id."})
                response.status_code = 400
                return response

            except Salesperson.DoesNotExist:
                response = JsonResponse({"message": "Invalid Salesperson employee id."})
                response.status_code = 400
                return response

            except AutomobileVO.DoesNotExist:
                response = JsonResponse({"message": "Invalid automobile vin."})
                response.status_code = 400
                return response

        except AttributeError:
            response = JsonResponse({"message": "Invalid Sale creation information."})
            response.status_code = 400
            return response

    else:
        response = Sale.objects.all()

    return JsonResponse({"sales": response}, encoder=SaleEncoder, safe=False)


@require_http_methods(["GET", "PUT", "DELETE"])
def sale(request, id):
    try:
        this_sale = Sale.objects.get(id=id)

    except Sale.DoesNotExist:
        response = JsonResponse(
            {"message": "That Sale does not exist. Verify the url & id."}
        )
        response.status_code = 404
        return response

    if request.method == "DELETE":
        this_sale, _ = Sale.objects.get(id=id).delete()
        return JsonResponse({"deleted": this_sale > 0})

    elif request.method == "GET":
        this_sale = Sale.objects.get(id=id)
        return JsonResponse({"sale": this_sale}, encoder=SaleEncoder, safe=False)

    return JsonResponse({"need a put method still": True})

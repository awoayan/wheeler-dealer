from common.json import ModelEncoder
from .models import Salesperson, Sale, AutomobileVO, Customer


class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
        ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
        ]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
        "id"
        ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "customer",
        "salesperson",
        "automobile",
        "id"
        ]
    encoders = {
        "customer": CustomerEncoder(),
        "salesperson": SalesPersonEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

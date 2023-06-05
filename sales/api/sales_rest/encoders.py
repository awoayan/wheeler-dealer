from common.json import ModelEncoder
from .models import Salesperson, Sale, AutomobileVO, Costumer


class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]


class CostumerEncoder(ModelEncoder):
    model = Costumer
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
        "sold"
    ]


class Sale(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "costumer",
        "salesperson",
        "automobile"
    ]
    encoders = {
        "costumer": CostumerEncoder,
        "salesperson": SalesPersonEncoder,
        "automobile": AutomobileVOEncoder
    }

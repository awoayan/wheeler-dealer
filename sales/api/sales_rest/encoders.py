from common.json import ModelEncoder
from .models import Salesperson, Sale, AutomobileVO, Customer


class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id"
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
        "sold"
    ]


class Sale(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "Customer",
        "salesperson",
        "automobile"
    ]
    encoders = {
        "Customer": CustomerEncoder,
        "salesperson": SalesPersonEncoder,
        "automobile": AutomobileVOEncoder
    }

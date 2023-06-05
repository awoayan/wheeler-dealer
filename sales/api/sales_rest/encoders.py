from api.common.json import ModelEncoder
from .models import Salesperson, Sale, AutomobileVO, Costumer

class SalesPersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

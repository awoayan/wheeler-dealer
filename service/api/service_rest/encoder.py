from .models import ValuedVINVO, Technician, Appointment
from common.json import ModelEncoder


class ValuedVINVODetailEncoder(ModelEncoder):
    model = ValuedVINVO
    properties = [
        "valvin",
        "import_href",
    ]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employeeno",
        "id"
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employeeno",
        "id"
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "custname",
        "date",
        "reason",
        "vin",
        "technician",
        "valued",
        "active",
        "cancelled",
        "finished",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "custname",
        "date",
        "reason",
        "vin",
        "technician",
        "valued",
        "active",
        "cancelled",
        "finished",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }

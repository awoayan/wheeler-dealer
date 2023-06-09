import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()
from service_rest.models import ValuedVINVO


def get_vins():
    response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    content = json.loads(response.content)
    for car in content["autos"]:
        ValuedVINVO.objects.update_or_create(
            import_href=car["href"],
            defaults={
                "valvin": car["vin"],
            }
        )


def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_vins()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()

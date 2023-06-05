import django, os, sys, time, json, requests
sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()
from sales_rest.models import AutomobileVO


def poll(repeat=True):
    while True:
        try:
            url = "http://project-beta-inventory-api-1:8000/api/automobiles/"
            response = requests.get(url)
            automobile_list = json.loads(response.content)
            for automobile in automobile_list["autos"]:
                AutomobileVO.objects.update_or_create(
                    vin = automobile["vin"],
                    sold = automobile["sold"]
                )

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(60)


if __name__ == "__main__":
    poll()

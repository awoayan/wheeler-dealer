from django.db import models


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.SmallIntegerField()


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=100)
    sold = models.BooleanField()


class Sale(models.Model):
    price = models.IntegerField()
    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.PROTECT
    )
    salesperson = models.ForeignKey(
        Salesperson,
        related_name="sales",
        on_delete=models.PROTECT
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales",
        on_delete=models.PROTECT
    )

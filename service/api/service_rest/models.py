from django.db import models
from django.urls import reverse
from django.core.validators import MinLengthValidator


class ValuedVINVO(models.Model):
    import_href = models.URLField(max_length=50, blank=True)
    valvin = models.CharField(max_length=17, unique=True, validators=[MinLengthValidator(17)])

    def __str__(self):
        return self.valvin

    def save(self, *args, **kwargs):
        self.valvin = self.valvin.upper()
        return super(ValuedVINVO, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Valued Customer Car"
        verbose_name_plural = "Valued Customer Cars"


class Technician(models.Model):
    name = models.CharField(max_length=200, unique=True, null=True)
    employeeno = models.PositiveSmallIntegerField(unique=True, null=True)

    def __str__(self): 
        return self.name

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.employeeno})

    class Meta:
        verbose_name = "Technician"
        verbose_name_plural = "Technicians"


class Appointment(models.Model):
    custname = models.CharField(max_length=200, null=True)
    date = models.DateField(null=True, blank=True)
    time = models.TimeField(null=True)
    reason = models.CharField(max_length=400, null=True)
    vin = models.CharField(max_length=17, null=True, validators=[MinLengthValidator(17)])
    valued = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    cancelled = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="technicians",
        on_delete=models.CASCADE
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.pk})

    def __str__(self):
        return f'{self.custname} - {self.date}'

    def save(self, *args, **kwargs):
        self.vin = self.vin.upper()
        return super(Appointment, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Service Appointment"
        verbose_name_plural = "Service Appointments"

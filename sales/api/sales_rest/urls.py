from django.urls import path
from .views import list_salespeople, salesperson, list_customers, customer, list_sales, sale


urlpatterns = [
    path('salespeople/', list_salespeople),
    path('salespeople/<int:id>/', salesperson),
    path('customers/', list_customers),
    path('customers/<int:id>/', customer),
    path('sales/', list_sales),
    path('sales/<int:id>/', sale)
]

# CarCar

Team: Ayan and Charles

* Person 1 - Which microservice? Charles - Sales
* Person 2 - Which microservice? Ayan - services

## Design

## Service microservice
my service microservice has a technicians, appointment, and vin models that correspond with my service department. the service microservice makes an API call to the inventory microservice to commuicate to eachother.
## Sales microservice

My models were designed to meet the requirements asked of the project and the poller grabs vo's from the inventory microservice. I didn't choose to filter by the "sold" value for the automobiles on the server side and instead I incorporate that filter in SaleForm.js.

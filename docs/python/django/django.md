---
sidebar_position: 1
---

# django

To start a Django Project

```bash
django-admin startproject crm
```

Now we have to cd into the application

```bash
cd crm
```

Now the folder structure of the application

```
--- Folder Structure ---
[crm]
    ├── __init__.py
    ├── [__pycache__]
        ├── __init__.cpython-311.pyc
        ├── settings.cpython-311.pyc
        ├── urls.cpython-311.pyc
        └── wsgi.cpython-311.pyc
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
db.sqlite3
manage.py
```

Now here the main file is `manage.py`. 

## Virtual Environment

Now we have to make a virtual environment in order to keep all the dependencies of the project separate

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

Now we have to install Django

```bash
pip install django
```

Now in order to start the server

```bash
python manage.py runserver
```

## Difference between a Project and a App

So basically a Project is a big complete project and in that there are separate apps for each functionality.

To create a app

```bash
python manage.py startapp accounts
```

Project Structure

```
[accounts]
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── [migrations]
        └── __init__.py
    ├── models.py
    ├── tests.py
    └── views.py
```

Now in order to let Django know about our app we add it in the list of installed apps in the settings.py file

```python
# crm > settings.py

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "accounts",
]
```

Now we can start working on this accounts app. In the accounts folder we have to work on two files i.e., `views.py` and `urls.py` 

```python
# accounts > urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('products/', views.products),
    path('customer/', views.customer),
]
```

```python
# accounts > views.py

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
	return HttpResponse('home')

def products(request):
	return HttpResponse('products')

def customer(request):
	return HttpResponse('customer')
```

Now from the main `urls.py` file in the crm folder we have to include its path

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls'))
]
```

## Django Templates

Now we can also output html content on the web page. Inside the accounts folder we need to create a folder structure exactly same since it follows the file convention and looks for the pages there.

```
[accounts]
    ├── [templates]
        └── [accounts]
            └── dashboard.html
						└── profile.html
						└── customers.html
```

Now we just have to update the `views.py` file in order to render the html page

```python
# accounts > views.py

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
	return render(request, 'accounts/dashboard.html')

def products(request):
	return render(request, 'accounts/products.html')

def customer(request):
	return render(request, 'accounts/customer.html')
```

## Templates (Make reusable code)

Now we have to create a template so that we can avoid the redundant code. Like we can define the Navbar and Footer of the application at a single place so that we don’t have to write it again and again. First we will create a `main.html` so that we can write all the code there and add a filler in which we can add the unique part of each page.

```html
<!--  accounts > templates > accounts > main.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM</title>
</head>
<body>
    <h1>Navbar</h1>
    <hr>

    {% block content %} 
    
    {% endblock %}

    <hr>
    <h5>Footer</h5>
</body>
</html>
```

`{% block content %}`  basically defines the section where we want to add content and `{% endblock %}` is used to end the block section. Now in order to use this template in any page

```html
<!--  accounts > templates > accounts > dashboard.html -->

{%  extends 'accounts/main.html' %}

{% block content %}

<h1>Dashboard</h1>

{% endblock %}
```

Now we can also code a particular section of our website as a separate section and include in any file as needed. Like here our navbar is in the main file itself so what we will do is we will code the navbar in a separate file and include it.

```html
<!--  accounts > templates > accounts > navbar.html -->

<h1>Navbar</h1>
<hr>
```

```html
<!--  accounts > templates > accounts > main.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM</title>
</head>
<body>
    {%  include 'accounts/navbar.html' %}

    {% block content %} 
    
    {% endblock %}

    <hr>
    <h5>Footer</h5>
</body>
</html>
```

## Styling

Now in order to style our website we can style it using css or we can include bootstrap in our website. So in order to include bootstrap in our website we will first include the CDN link in the `main.html` file.

```html
<!--  accounts > templates > accounts > main.html -->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
</head>
```

Now we can simply grab the bootstrap code and use

```html
<!--  accounts > templates > accounts > navbar.html -->

<nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
```

Now we will write few more bootstrap classes to structure the website

<details>
<summary>dashboard.html</summary>

```html
{%  extends 'accounts/main.html' %}
    
    {% block content %}
    
    {%  include 'accounts/status.html' %}
    
    <br>
    
    <div class="row">
    	<div class="col-md-5">
    		<h5>CUSTOMERS:</h5>
    		<hr>
    		<div class="card card-body">
    			<a class="btn btn-primary  btn-sm btn-block" href="">Create Customer</a>
    			<table class="table table-sm">
    				<tr>
    					<th></th>
    					<th>Customer</th>
    					<th>Orders</th>
    				</tr>
    
    			</table>
    		</div>
    	</div>
    
    	<div class="col-md-7">
    		<h5>LAST 5 ORDERS</h5>
    		<hr>
    		<div class="card card-body">
    			<a class="btn btn-primary  btn-sm btn-block" href="">Create Order</a>
    			<table class="table table-sm">
    				<tr>
    					<th>Product</th>
    					<th>Date Orderd</th>
    					<th>Status</th>
    					<th>Update</th>
    					<th>Remove</th>
    				</tr>
    		
    			</table>
    		</div>
    	</div>
    
    </div>
    
    {% endblock %}
```
</details>

<details>
<summary>main.html</summary>

```html
<!DOCTYPE html>
<html>
<head>
    <title>CRM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
        
        #logo{
        }

        body{
            background-color: #ebeff5;
        }

        #total-orders{
            background-color: #4cb4c7;
        }

        #orders-delivered{
            background-color: #7abecc;
        }

        #orders-pending{
            background-color: #7CD1C0;
        }

    </style>
</head>
<body>
    {%  include 'accounts/navbar.html' %}
    <div class="container-fluid">
    {% block content %}

    {% endblock %}
    </div>
    <hr>
    <h5>Our footer</h5>
    
</body>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</html>
```
</details>

<details>
<summary>customer.html</summary>

```html
{%  extends 'accounts/main.html' %}

{% block content %}

    <br>

<div class="row">
    <div class="col-md">
        <div class="card card-body">
            <h5>Customer:</h5>
            <hr>
            <a class="btn btn-outline-info  btn-sm btn-block" href="">Update Customer</a>
            <a class="btn btn-outline-danger  btn-sm btn-block" href="">Delete Customer</a>

        </div>
    </div>

    <div class="col-md">
        <div class="card card-body">
            <h5>Contact Information</h5>
            <hr>
            <p>Email: </p>
            <p>Phone: </p>
        </div>
    </div>

    <div class="col-md">
        <div class="card card-body">
            <h5>Total Orders</h5>
            <hr>
            <h1 style="text-align: center;padding: 10px"></h1>
        </div>
    </div>
</div>

<br>
<div class="row">
    <div class="col">
        <div class="card card-body">
            <form method="get">

            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
    </div>
    
</div>
<br>

<div class="row">
    <div class="col-md">
        <div class="card card-body">
            <table class="table table-sm">
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Date Orderd</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>

            </table>
        </div>
    </div>
</div>

{% endblock %}
```
</details>
  
<details>
<summary>products.html</summary>

```html
{%  extends 'accounts/main.html' %}
    
    {% block content %}
    
    		<br>
    
    		<div class="row">
    			<div class="col-md">
    				<div class="card card-body">
    					<h5>Products</h5>
    				</div>
    				<div class="card card-body">
    					<table class="table">
    						<tr>
    							<th>Product</th>
    							<th>Category</th>
    							<th>Price</th>
    						</tr>
    						
    					</table>
    				</div>
    			</div>
    			
    		</div>
    
    {% endblock content %}
```
</details>

<details>
<summary>status.html</summary>

```html
<br>
    
    <div class="row">
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="total-orders">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Total Orders</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title"></h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="orders-delivered">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Orders Delivered</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title"></h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="orders-pending">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Orders Pending</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title"></h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    </div>
```
</details>
    

## Static Files

Static files in Django is a place where we can store our `css`, `js` and `images`. We will create a folder named static in the root of our project.

```
[static]
    ├── [css]
        └── main.css
    ├── [images]
    └── [js]
```

```css
/*   static > css > main.css   */

/* #logo{
		} */

body {
  background-color: #ebeff5;
}

#total-orders {
  background-color: #4cb4c7;
}

#orders-delivered {
  background-color: #7abecc;
}

#orders-pending {
  background-color: #7cd1c0;
}
```

Now we have to configure our static folder so that Django knows to read the files from here. So in our `settings.py` file in the crm folder. 

```python
# crm > settings.py

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.1/howto/static-files/

STATIC_URL = '/static/'

MEDIA_URL = '/images/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
```

Now we have to include the css in our `main.html` file. We have to use the `{% load static %}` at the top and we can reference the path.

```html
{% load static %}

<!DOCTYPE html>
<html>
<head>
	<title>CRM</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="{% static '/css/main.css' %}">

</head>
```

## Using Images

So in order to use the images we have to include the images inside the images folder and in the Django `settings.py` file specify the `MEDIA_URL = '/images/'` that we have already done above.

Now in order to use the image we can simple call out using Django method of calling the static files. Lets try to include logo in the Navbar.

```html
<!-- accounts > templates > accounts > navbar.html -->

{% load static %}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <img src="{% static 'images/logo.png' %}" width="250">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
    </ul>
  </div>
</nav>
```

## Building Database

Django by default comes with a sqlite database but it is not suitable for production environment so we can use something more compatible like `mysql` or `postgresql`. We can specify them in the `settings.py` file.

```python
# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

Now in order to make the database know about our tables and structure we run the migrate command

```bash
python manage.py migrate
```

Now our tables are created. If we make any changes in our database we need to run two commands.

```bash
python manage.py makemigrations
python manage.py migrate
```

## Django Admin panel

To access the admin panel we need to create a superuser

```bash
python manage.py createsuperuser
```

Now after creating the superuser we can login into the admin panel http://127.0.0.1:8000/admin/

## Models in Django

Models in Django is a place where we basically define how our database will look. 

```python
# accounts > models.py

from django.db import models

# Create your models here.

class Customer(models.Model):
	name = models.CharField(max_length=200, null=True)
	phone = models.CharField(max_length=200, null=True)
	email = models.CharField(max_length=200, null=True)
	date_created = models.DateTimeField(auto_now_add=True, null=True)
```

Now in order to take this effect we have to first `makemigrations` and then `migrate` it

```bash
python manage.py makemigrations
python manage.py migrate
```

In the console we can see

```bash
(venv) (base) ➜ python manage.py makemigrations

Migrations for 'accounts':
  accounts/migrations/0001_initial.py
    - Create model Customer

(venv) (base) ➜  python manage.py migrate        
Operations to perform:
  Apply all migrations: accounts, admin, auth, contenttypes, sessions
Running migrations:
  Applying accounts.0001_initial... OK
```

Now in order to view this in the admin panel we need to register it

```python
# accounts > admin.py

from django.contrib import admin

# Register your models here.

from .models import Customer
admin.site.register(Customer)
```

![Screenshot 2023-08-21 at 12.11.59 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4670c33e-7560-4004-bbae-ed1b4ff5fadb/Screenshot_2023-08-21_at_12.11.59_PM.png)

Now we can add to the database from the admin panel itself.

![Screenshot 2023-08-21 at 12.14.58 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/922ea47d-f808-4472-88a8-0c089855287b/Screenshot_2023-08-21_at_12.14.58_PM.png)

After that we can see the data is added in the database

![Screenshot 2023-08-21 at 12.15.45 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dad56974-fa70-4559-b401-9318b7272a1d/Screenshot_2023-08-21_at_12.15.45_PM.png)

Now in place of customer object we can show the object name. We can simply add the code 

```python
from django.db import models

# Create your models here.

class Customer(models.Model):
	name = models.CharField(max_length=200, null=True)
	phone = models.CharField(max_length=200, null=True)
	email = models.CharField(max_length=200, null=True)
	date_created = models.DateTimeField(auto_now_add=True, null=True)

	def __str__(self):
		return self.name
```

![Screenshot 2023-08-21 at 2.28.36 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/286f4100-ef04-4c1f-a4a4-8a56f13bcb77/Screenshot_2023-08-21_at_2.28.36_PM.png)

Now lets add some more tables for customers and products.

- models.py
    
    ```python
    from django.db import models
    
    # Create your models here.
    
    class Customer(models.Model):
    	name = models.CharField(max_length=200, null=True)
    	phone = models.CharField(max_length=200, null=True)
    	email = models.CharField(max_length=200, null=True)
    	date_created = models.DateTimeField(auto_now_add=True, null=True)
    
    	def __str__(self):
    		return self.name
    
    class Product(models.Model):
    	CATEGORY = (
    			('Indoor', 'Indoor'),
    			('Out Door', 'Out Door'),
    			) 
    
    	name = models.CharField(max_length=200, null=True)
    	price = models.FloatField(null=True)
    	category = models.CharField(max_length=200, null=True, choices=CATEGORY)
    	description = models.CharField(max_length=200, null=True)
    	date_created = models.DateTimeField(auto_now_add=True, null=True)
    
    class Order(models.Model):
    	STATUS = (
    			('Pending', 'Pending'),
    			('Out for delivery', 'Out for delivery'),
    			('Delivered', 'Delivered'),
    			)
    
    	#customer = 
    	#product = 
    	date_created = models.DateTimeField(auto_now_add=True, null=True)
    	status = models.CharField(max_length=200, null=True, choices=STATUS)
    ```
    
- admin.py
    
    ```python
    from django.contrib import admin
    
    # Register your models here.
    
    from .models import *
    
    admin.site.register(Customer)
    admin.site.register(Product)
    admin.site.register(Order)
    ```
    

## Database Query

We can query the database so that we can view the content of the database.

We can go into the interactive shell to make query by running the following command.

```bash
python manage.py shell
```

Queries

```bash
#***(1)Returns all customers from customer table
customers = Customer.objects.all()

#(2)Returns first customer in table
firstCustomer = Customer.objects.first()

#(3)Returns last customer in table
lastCustomer = Customer.objects.last()

#(4)Returns single customer by name
customerByName = Customer.objects.get(name='Peter Piper')

#***(5)Returns single customer by name
customerById = Customer.objects.get(id=4)

#***(6)Returns all orders related to customer (firstCustomer variable set above)
firstCustomer.order_set.all()

#(7)***Returns orders customer name: (Query parent model values)
order = Order.objects.first() 
parentName = order.customer.name

#(8)***Returns products from products table with value of "Out Door" in category attribute
products = Product.objects.filter(category="Out Door")

#(9)***Order/Sort Objects by id
leastToGreatest = Product.objects.all().order_by('id') 
greatestToLeast = Product.objects.all().order_by('-id') 

#(10) Returns all products with tag of "Sports": (Query Many to Many Fields)
productsFiltered = Product.objects.filter(tags__name="Sports")

'''
(11)Bonus
Q: If the customer has more than 1 ball, how would you reflect it in the database?
A: Because there are many different products and this value changes constantly you would most 
likly not want to store the value in the database but rather just make this a function we can run
each time we load the customers profile
'''

#Returns the total count for number of time a "Ball" was ordered by the first customer
ballOrders = firstCustomer.order_set.filter(product__name="Ball").count()

#Returns total count for each product orderd
allOrders = {}

for order in firstCustomer.order_set.all():
	if order.product.name in allOrders:
		allOrders[order.product.name] += 1
	else:
		allOrders[order.product.name] = 1

#Returns: allOrders: {'Ball': 2, 'BBQ Grill': 1}

#RELATED SET EXAMPLE
class ParentModel(models.Model):
	name = models.CharField(max_length=200, null=True)

class ChildModel(models.Model):
	parent = models.ForeignKey(Customer)
	name = models.CharField(max_length=200, null=True)

parent = ParentModel.objects.first()
#Returns all child models related to parent
parent.childmodel_set.all()
```

## Rendering data into templates

We can render the products into the template. First we have made query to take all the data of products table into products variable and we are passing them in the return.

```bash
# accounts > views.py

from django.shortcuts import render
from django.http import HttpResponse

from .models import *

def home(request):
	return render(request, 'accounts/dashboard.html')

def products(request):
	products = Product.objects.all()

	return render(request, 'accounts/products.html', {'products':products})

def customer(request):
	return render(request, 'accounts/customer.html')
```

Now we will show them into the frontend by editing the products.html page

```html
{%  extends 'accounts/main.html' %}

{% block content %}

		<br>

		<div class="row">
			<div class="col-md">
				<div class="card card-body">
					<h5>Products</h5>
				</div>
				<div class="card card-body">
					<table class="table">
						<tr>
							<th>Product</th>
							<th>Category</th>
							<th>Price</th>
						</tr>

						{% for i in products %}
							<tr>
								<td>{{i.name}}</td>
								<td>{{i.category}}</td>
								<td>{{i.price}}</td>
							</tr>
						{% endfor %}
						
					</table>
				</div>
			</div>
			
		</div>

{% endblock content %}
```

Now if we want to pass more than one information into the views we can pass them from `views.py`. Here we are passing the orders, customers, total orders, delivered and pending orders. 

```python
# accounts > views.py

from django.shortcuts import render
from django.http import HttpResponse
from .models import *

def home(request):
	orders = Order.objects.all()
	customers = Customer.objects.all()

	total_customers = customers.count()

	total_orders = orders.count()
	delivered = orders.filter(status='Delivered').count()
	pending = orders.filter(status='Pending').count()

	context = {'orders':orders, 'customers':customers,
	'total_orders':total_orders,'delivered':delivered,
	'pending':pending }

	return render(request, 'accounts/dashboard.html', context)

def products(request):
	products = Product.objects.all()

	return render(request, 'accounts/products.html', {'products':products})

def customer(request):
	return render(request, 'accounts/customer.html')
```

Other changes

- dashboard.html
    
    ```html
    {%  extends 'accounts/main.html' %}
    
    {% block content %}
    
    {%  include 'accounts/status.html' %}
    
    <br>
    
    <div class="row">
    	<div class="col-md-5">
    		<h5>CUSTOMERS:</h5>
    		<hr>
    		<div class="card card-body">
    			<a class="btn btn-primary  btn-sm btn-block" href="">Create Customer</a>
    			<table class="table table-sm">
    				<tr>
    					<th>Customer</th>
    					<th>Phone</th>
    				</tr>
    
    				{% for customer in customers %}
    					<tr>
    
    						<td>{{customer.name}}</td>
    						<td>{{customer.phone}}</td>
    					</tr>
    				{% endfor %}
    
    			</table>
    		</div>
    	</div>
    
    	<div class="col-md-7">
    		<h5>LAST 5 ORDERS</h5>
    		<hr>
    		<div class="card card-body">
    			<a class="btn btn-primary  btn-sm btn-block" href="">Create Order</a>
    			<table class="table table-sm">
    				<tr>
    					<th>Product</th>
    					<th>Date Orderd</th>
    					<th>Status</th>
    					<th>Update</th>
    					<th>Remove</th>
    				</tr>
    
    				{% for order in orders %}
    					<tr>
    						<td>{{order.product}}</td>
    						<td>{{order.date_created}}</td>
    						<td>{{order.status}}</td>
    						<td><a href="">Update</a></td>
    						<td><a href="">Delete</a></td>
    
    					</tr>
    				{% endfor %}
    
    		
    			</table>
    		</div>
    	</div>
    
    </div>
    
    {% endblock %}
    ```
    
- status.html
    
    ```html
    <br>
    
    <div class="row">
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="total-orders">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Total Orders</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title">{{total_orders}}</h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="orders-delivered">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Orders Delivered</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title">{{delivered}}</h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    
    	<div class="col">
    		<div class="col-md">
    			<div class="card text-center text-white  mb-3" id="orders-pending">
    			  	<div class="card-header">
    			  		<h5 class="card-title">Orders Pending</h5>
    			  	</div>
    			  	<div class="card-body">
    			    	<h3 class="card-title">{{pending}}</h3>
    			  	</div>
    			</div>
    		</div>
    	</div>
    </div>
    ```
    

## Dynamic URL Routing

We can make the url dynamic by passing the type and key inside `<>` so we can pass that id in the url and based on that we can render a unique dynamic view. e.g. `http://127.0.0.1:8000/customer/1` 

```python
# accounts > urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('products/', views.products),
    path('customer/<str:pk>/', views.customer),
]
```

Modifying the Views file to grab the id from the url and grab the content based on it. So we take the `pk` from the url and based on that we query the customer and store in the customers field and then we grab all the orders for that customer and also the order count and pass in the view.

```python
# accounts > views.py

def customer(request, pk):
	customer = Customer.objects.get(id=pk)

	orders = customer.order_set.all()
	order_count = orders.count()

	context = {'customer':customer, 'orders':orders, 'order_count':order_count}
	return render(request, 'accounts/customer.html',context)
```

Now we can show the content in the `customer.html` page.

- customer.html
    
    ```html
    {%  extends 'accounts/main.html' %}
    
    {% block content %}
    
    	<br>
    
    <div class="row">
    	<div class="col-md">
    		<div class="card card-body">
    			<h5>Customer:</h5>
    			<hr>
    			<a class="btn btn-outline-info  btn-sm btn-block" href="">Update Customer</a>
    			<a class="btn btn-outline-danger  btn-sm btn-block" href="">Delete Customer</a>
    
    		</div>
    	</div>
    
    	<div class="col-md">
    		<div class="card card-body">
    			<h5>Contact Information</h5>
    			<hr>
    			<p>Email: {{customer.email}}</p>
    			<p>Phone: {{customer.phone}}</p>
    		</div>
    	</div>
    
    	<div class="col-md">
    		<div class="card card-body">
    			<h5>Total Orders</h5>
    			<hr>
    			<h1 style="text-align: center;padding: 10px">{{order_count}}</h1>
    		</div>
    	</div>
    </div>
    
    <br>
    <div class="row">
    	<div class="col">
    		<div class="card card-body">
    			<form method="get">
    
    		    <button class="btn btn-primary" type="submit">Search</button>
    		  </form>
    		</div>
    	</div>
    	
    </div>
    <br>
    
    <div class="row">
    	<div class="col-md">
    		<div class="card card-body">
    			<table class="table table-sm">
    				<tr>
    					<th>Product</th>
    					<th>Category</th>
    					<th>Date Orderd</th>
    					<th>Status</th>
    					<th>Update</th>
    					<th>Remove</th>
    				</tr>
    
    				{% for order in orders %}
    
    				<tr>
    					<td>{{order.product}}</td>
    					<td>{{order.product.category}}</td>
    					<td>{{order.date_created}}</td>
    					<td>{{order.status}}</td>
    					<td><a class="btn btn-sm btn-info" href="">Update</a></td>
    					<td><a class="btn btn-sm btn-danger" href="">Remove</a></td>
    				</tr>
    				{% endfor %}
    
    			</table>
    		</div>
    	</div>
    </div>
    
    {% endblock %}
    ```
    

## Giving the name to the url for easy navigation

```python
# accounts > urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('products/', views.products, name='products'),
    path('customer/<str:pk_test>/', views.customer, name="customer"),
]
```

Now adding the link to the navbar

```html
<!-- accounts > navbar.html  -->

{% load static %}

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <img src="{% static 'images/logo.png' %}">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="{% url 'home' %}">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="{% url 'products' %}">Products</a>
      </li>
    </ul>
  </div>
</nav>
```

<details>
<summary>dashboard.html</summary>

```html
{%  extends 'accounts/main.html' %}

{% block content %}

{%  include 'accounts/status.html' %}

<br>

<div class="row">
    <div class="col-md-5">
        <h5>CUSTOMERS:</h5>
        <hr>
        <div class="card card-body">
            <a class="btn btn-primary  btn-sm btn-block" href="">Create Customer</a>
            <table class="table table-sm">
                <tr>
                    <th></th>
                    <th>Customer</th>
                    <th>Phone</th>
                </tr>

                {% for customer in customers %}
                    <tr>
                        <td><a class="btn btn-sm btn-info" href="{% url 'customer' customer.id %}">View</a></td>
                        <td>{{customer.name}}</td>
                        <td>{{customer.phone}}</td>
                    </tr>
                {% endfor %}

            </table>
        </div>
    </div>

    <div class="col-md-7">
        <h5>LAST 5 ORDERS</h5>
        <hr>
        <div class="card card-body">
            <a class="btn btn-primary  btn-sm btn-block" href="">Create Order</a>
            <table class="table table-sm">
                <tr>
                    <th>Product</th>
                    <th>Date Orderd</th>
                    <th>Status</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr>

                {% for order in orders %}
                    <tr>
                        <td>{{order.product}}</td>
                        <td>{{order.date_created}}</td>
                        <td>{{order.status}}</td>
                        <td><a class="btn btn-sm btn-info" href="">Update</a></td>
                        <td><a class="btn btn-sm btn-danger"href="">Delete</a></td>

                    </tr>
                {% endfor %}

        
            </table>
        </div>
    </div>

</div>

{% endblock %}
```
</details>

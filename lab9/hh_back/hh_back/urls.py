"""
URL configuration for hh_back project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api import views 

urlpatterns = [
    path('companies/', views.all_companies),
    path('companies/<int:id>/', views.one_company),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.all_vacancies),
    path('vacancies/<int:id>/', views.one_vacancy),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]
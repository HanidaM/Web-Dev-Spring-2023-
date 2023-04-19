
from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('company/<int:company_id>/', views.Company_detail),    
    path('vacancies/', views.VacancyAPIView.as_view()),
    path('vacancy/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
    path('company/<int:company_id>/vacancy/', views.CompanyVacancyAPIView.as_view()),
]

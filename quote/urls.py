from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_name, name='get_name'),
    path('thanks/', views.thanks, name='thanks'),
    path('your-contact/', views.result, name='your-contact'),
    path('contact-page/', views.get_contact, name='contact-page'),
    path('contact-page/your-contact/', views.result_2, name='your_contact'),
    path('proof/', views.proof, name='your_proof'),
    path('home/', views.home, name='home'),
    path('calculator/', views.calculator, name='calculator'),
    path('quotePDF/', views.quotePDF, name='quotePDF'),
    path('quotePDF2/', views.quotePDF2, name='quotePDF2'),
]

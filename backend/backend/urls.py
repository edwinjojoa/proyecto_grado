"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path
from ganado import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/ganados/', views.GanadoListCreateAPIView.as_view(), name='api-list-create-ganado'),
    path('api/ganados/<int:pk>/delete/', views.GanadoDestroyAPIView.as_view(), name='api-delete-ganado'),
    path('api/ganados/<int:pk>/', views.GanadoRetrieveUpdateDestroyView.as_view(), name='ganado-retrieve-update-destroy'),
    path('api/ganados/search/', views.GanadoSearchView.as_view(), name='ganado-search'),
    #url categorias
    path('api/categorias/', views.CategoriaListCreateAPIView.as_view(), name='api-list-create-categoria'),
    path('api/categorias/<int:pk>/delete/', views.CategoriaDestroyAPIView.as_view(), name='api-delete-categoria'),
    path('api/categorias/<int:pk>/', views.CategoriaRetrieveUpdateDestroyView.as_view(), name='categoria-retrieve-update-destroy'),
    path('api/categorias/search/', views.CategoriaSearchView.as_view(), name='categoria-search'),
    # url Razas
    path('api/razas/', views.RazaListCreateAPIView.as_view(), name='api-list-create-razas'),
    path('api/razas/<int:pk>/delete/', views.RazaDestroyAPIView.as_view(), name='api-delete-razas'),
    path('api/razas/<int:pk>/', views.RazaRetrieveUpdateDestroyView.as_view(), name='razas-retrieve-update-destroy'),

    #Litros de leche 
    path('api/litrosDeLeche/', views.LitrosDeLecheListCreateAPIView.as_view(), name='api-list-create-litrosDeLeche'),
    path('api/litrosDeLeche/<int:pk>/delete/', views.LitrosDeLecheDestroyAPIView.as_view(), name='api-delete-litrosDeLeche'),
    path('api/litrosDeLeche/<int:pk>/', views.LitrosDeLecheRetrieveUpdateDestroyView.as_view(), name='litrosDeLeche-retrieve-update-destroy'),

    

]
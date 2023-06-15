from rest_framework import generics
from rest_framework.response import Response
from .models import Ganado, Categoria, Raza
from .serializers import GanadoSerializer,CategoriaSerializer, RazaSerializer 
from django.views.generic import View


class GanadoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer

class GanadoDestroyAPIView(generics.DestroyAPIView):
    queryset = Ganado.objects.all()
    serializer_class = GanadoSerializer



class GanadoSearchView(View):
    def get(self, request):
        search_query = request.GET.get('search')
        if search_query:
            ganados = Ganado.objects.filter(nombre__icontains=search_query)
        else:
            ganados = Ganado.objects.all()
        return render(request, 'ganado_search.html', {'ganados': ganados, 'search_query': search_query})

    #categoria

class CategoriaListCreateAPIView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaDestroyAPIView(generics.DestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer

class CategoriaSearchView(View):
    def get(self, request):
        search_query = request.GET.get('search')
        if search_query:
            categorias = Categoria.objects.filter(nombre__icontains=search_query)
        else:
            categorias = Categoria.objects.all()
        return render(request, 'ganado_search.html', {'ganados': categorias, 'search_query': search_query})
    

    #Raza

class RazaListCreateAPIView(generics.ListCreateAPIView):
    queryset = Raza.objects.all()
    serializer_class = RazaSerializer

class RazaRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Raza.objects.all()
    serializer_class = RazaSerializer

class RazaDestroyAPIView(generics.DestroyAPIView):
    queryset = Raza.objects.all()
    serializer_class = RazaSerializer
    

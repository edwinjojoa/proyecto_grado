from rest_framework import serializers
from .models import Ganado, Categoria, Raza

class GanadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ganado
        fields = ['id', 'codigo', 'nombre', 'raza', 'categoria', 'fechaNacimiento','numeroMarca','descripcion','foto','creado','editado']

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'categoria', 'descripcion','creado','editado']

class RazaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Raza
        fields = ['id', 'raza', 'descripcion','creado','editado']

class LitrosDeLecheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Raza
        fields = ['id', 'cantidad','vrUnitario', 'descripcion','creado','editado']
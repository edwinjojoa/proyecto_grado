from django.db import models

# Create your models here.

from django.db import models

class Ganado(models.Model):
    codigo = models.CharField(max_length=50)
    nombre = models.CharField(max_length=100)
    raza = models.CharField(max_length=100)
    categoria = models.CharField(max_length=100)
    fechaNacimiento = models.DateTimeField(auto_now_add=False)
    numeroMarca = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=250)
    foto = models.CharField(max_length=300)
    creado = models.DateTimeField(auto_now_add=True)
    editado = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.codigo
class Categoria(models.Model):
    id =models.AutoField(primary_key=True)
    categoria = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    creado = models.DateTimeField(auto_now_add=True)
    editado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.categoria
    
class Raza(models.Model):
    id =models.AutoField(primary_key=True)
    raza = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=250)
    creado = models.DateTimeField(auto_now_add=True)
    editado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.raza
    
class LitrosDeLeche(models.Model):
    id =models.AutoField(primary_key=True)
    cantidad = models.BigIntegerField()
    vrUnitario = models.BigIntegerField()
    descripcion = models.CharField(max_length=250)
    creado = models.DateTimeField(auto_now_add=True)
    editado = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.cantidad)
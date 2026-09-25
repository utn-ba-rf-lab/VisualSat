# app/services/imagen_service.py

import os
import mimetypes #Librería para manejar los fromatos sin tener que hardcodear todas las opciones

from fastapi import Request


class ImagenService:

    def __init__(self):
        #Para unificar el uso de la variable de entorno, pero dejo la ruta de prueba por default
        self.images_raw_path = os.getenv("IMAGES_PATH", "/home/javiermaita/Imágenes/prueba") 

        #Cargo al inicio las imágenes en memoria (guardo el listdir en una variable)
        self.imagenes_en_memoria = os.listdir(self.images_raw_path)


    def obtener_nombres_imagenes(self):
       
        return self.imagenes_en_memoria

    def actualizar_list_imagenes(self):
        #Reemplaza las imágenes en la RAM con las actualizaciones
        self.imagenes_en_memoria = os.listdir(self.images_raw_path)
        return len(self.imagenes_en_memoria) # Devuelve el largo de la lista sólo para controlar

    def obtener_imagenes(self, request: Request):

        imagenes = []

        archivos = self.obtener_nombres_imagenes()

        for archivo in archivos:

            tipo_mime, _ = mimetypes.guess_type(archivo)

            # Usa la librería para abarcar cualquier tipo de extensión que sea una imagen
            if tipo_mime and tipo_mime.startswith('image/'):

                imagenes.append({
                    "nombre": archivo,
                    "url": str(request.base_url) + f"images-raw/{archivo}"
                }) 

        return imagenes
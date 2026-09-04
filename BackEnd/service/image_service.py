# app/services/imagen_service.py

import os

from fastapi import Request


class ImagenService:

    def __init__(self):
        self.images_raw_path = "/home/javiermaita/Imágenes/prueba"


    def obtener_nombres_imagenes(self):

        return os.listdir(self.images_raw_path)


    def obtener_imagenes(self, request: Request):

        imagenes = []

        archivos = self.obtener_nombres_imagenes()

        for archivo in archivos:

            if archivo.lower().endswith(".png"):

                imagenes.append({
                    "nombre": archivo,
                    "url": str(request.base_url) + f"images-raw/{archivo}"
                })

        return imagenes
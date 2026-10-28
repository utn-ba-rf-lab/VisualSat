import os
import json
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import argparse
import uvicorn
import logging

logging.basicConfig(level=logging.DEBUG, format='%(levelname)s - %(message)s')

from fastapi.middleware.cors import CORSMiddleware

from controllers import image_controller, satelite_controller
from controllers.image_controller import router as imagen_router
from controllers.pasadas_controller import router as pasadas_router
from controllers.satelite_controller import router as satelites_router

# Configuración de argumentos para rutas de archivos
filepath = os.path.dirname(os.path.abspath(__file__)) # Dirección al repo para apuntar directo no importa de donde se dispare.
images_dir_default = f'{filepath}/images/raw'
satelites_file_default = f'{filepath}/data/satelites.json'
orbit_url_default = "http://127.0.0.1:5000"
parser = argparse.ArgumentParser()
parser.add_argument("--images-dir", dest="images_dir", default=images_dir_default, help="Ruta a la carpeta donde se almacenan las imágenes satelitales")
parser.add_argument("--satelites-file", default=satelites_file_default, help="Ruta al archivo JSON con la información de los satélites")
parser.add_argument("--orbit-url", default=orbit_url_default, help="Endpoint del Orbit-Predictor")

args = parser.parse_args()

print(args) 

# Crear la carpeta por defecto si esta no existe.
if (not os.path.isdir(args.images_dir) and images_dir_default == args.images_dir):
    os.makedirs(args.images_dir, mode=0o766)

image_controller.imagen_service.images_raw_path = args.images_dir
image_controller.imagen_service.actualizar_list_imagenes()

satelite_controller.satelite_service.orbit_url = args.orbit_url
satelite_controller.satelite_service.archivo_satelites = args.satelites_file
satelite_controller.satelite_service.satelites = satelite_controller.satelite_service.cargar_satelites()

if args.orbit_url != orbit_url_default:
    pasadas_controller.pasadas_service.orbit_url = args.orbit_url

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modifico las rutas que estaban definidas antes (hardcodeadas), ahora usando el parser
images_raw_path = args.images_dir

# Archivos estáticos generales
app.mount(
    "/static",
    StaticFiles(directory="static"),
    name="static"
)

# Imágenes procesadas
app.mount(
    "/images-raw",
    StaticFiles(directory=images_raw_path),
    name="images-raw"
)

# Controladores
app.include_router(imagen_router)
app.include_router(pasadas_router)
app.include_router(satelites_router)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)

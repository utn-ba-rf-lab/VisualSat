from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from controllers.image_controller import router as imagen_router

app = FastAPI()

images_raw_path = "/home/javiermaita/Imágenes/prueba"

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
import os

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

#Ruta de imagenes procesadas (JAVIER - CAMBIAR PARA RFLAB)
images_raw_path = "/home/javiermaita/Imágenes/prueba"
images = os.listdir(images_raw_path)

# Montar la carpeta "static" para servir archivos como imágenes, CSS, JS
app.mount("/static", StaticFiles(directory="static"), name="static")
# Montamos la carpetas images-raw que contiene las imagenes tomadas por los sats
app.mount("/images-raw", StaticFiles(directory=images_raw_path), name="images-raw")

# Motor de plantillas
templates = Jinja2Templates(directory="templates")

#API
#---Home
@app.get("/", response_class=HTMLResponse)
async def root(request: Request):

    return templates.TemplateResponse(
        request=request,
        name="home.html",
        context={"images": images}
    )

#---Servir imagenes
@app.get("/imagenes")
async def obtener_imagenes(request: Request):

    imagenes = []

    for archivo in images:
        if archivo.lower().endswith(".jpeg"):
            imagenes.append({
                "nombre": archivo,
                "url": str(request.base_url) + f"images-raw/{archivo}"
            })

    return {
        "imagenes": imagenes
    }
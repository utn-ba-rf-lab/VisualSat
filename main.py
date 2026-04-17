import os

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

images_raw_path = "/home/javiermaita/Documentos/PID/processed-images"

# Montar la carpeta "static" para servir archivos como imágenes, CSS, JS
app.mount("/static", StaticFiles(directory="static"), name="static")
# Montamos la carpetas images-raw que contiene las imagenes tomadas por los sats
app.mount("/images-raw", StaticFiles(directory=images_raw_path), name="images-raw")

# Motor de plantillas
templates = Jinja2Templates(directory="templates")

@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    images = os.listdir(images_raw_path)
    return templates.TemplateResponse("home.html", {"request": request, "images": images})

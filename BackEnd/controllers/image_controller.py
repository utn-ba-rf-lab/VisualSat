# app/controllers/imagen_controller.py

from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse

from service.image_service import ImagenService


router = APIRouter()

imagen_service = ImagenService()


@router.get("/api/imagenes")
async def obtener_imagenes(request: Request):

    return {
        "imagenes": imagen_service.obtener_imagenes(request)
    }
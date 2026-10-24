# app/controllers/pasadas_controller.py

from fastapi import APIRouter, Request

from service.pasadas_service import PasadasService


router = APIRouter()

pasadas_service = PasadasService()

@router.get("/api/pasadas")
def obtener_pasadas(sat_id: str | None = None): # Como en orbit lo manejan como un query param, decidí unificar acá también la ruta, siendo "sat_id" un parámetro opcional para filtrar
    if sat_id:
        return pasadas_service.obtener_por_satelite(sat_id)
    return pasadas_service.obtener_todas()

@router.get("/api/pasadas/next")
def obtener_proxima_pasada():
    return pasadas_service.obtener_proxima()

#@router.get("/api/pasadas/{sat_id}")
#def obtener_pasadas_satelite(sat_id: str):
#   return pasadas_service.obtener_por_satelite(sat_id)
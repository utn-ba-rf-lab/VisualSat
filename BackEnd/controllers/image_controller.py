# app/controllers/imagen_controller.py

from fastapi import APIRouter, Request, Header, HTTPException, status

from service.image_service import ImagenService


router = APIRouter()

imagen_service = ImagenService()


@router.get("/api/imagenes")
async def obtener_imagenes(request: Request):

    return {
        "imagenes": imagen_service.obtener_imagenes(request)
    }

@router.put("/api/imagenes") # Actualizar  imágenes(el nombre lo dejé así por un enfoque más restful, pero si prefieren lo cambio a /actualizar_imagenes)
async def actualizar_imagenes(request: Request):
    cliente_ip= request.client.host
    ip_valida = "127.0.0.1" #opción de prueba media hardcodeada, que permite sólo al localhost usar este endpoint

    if cliente_ip != ip_valida:
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN,
            detail = "Acceso denegado. Endpoint de uso interno"
        )

    resultado = imagen_service.actualizar_list_imagenes()
    return {"mensaje": "Lista de imágenes actualizada", "total_imagenes": resultado}

# Acá abajo dejo una opción que entiendo es la más correcta trabajando desde la API (en vez de manejar tema de redes acá).
#  La dejo comentada porque no quiero romper nada, porque no sé bien cómo se manejaría esto desde el lado del orbit predictor

"""@router.put("/api/imagenes")
async def actualizar_imagenes_con_token(token_interno: str = Header(None)):
    TOKEN = "token_de_prueba"

    if token_interno != TOKEN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail= "Acceso denegado. Token inválido"
        )

    resultado = imagen_service.actualizar_list_imagenes() #A partir de acá hace lo mismo que la opción de arriba
    return {"mensaje": "Lista de imágenes actualizada", "total_imagenes": resultado}"""


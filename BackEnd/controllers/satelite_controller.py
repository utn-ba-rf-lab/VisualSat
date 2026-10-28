
from fastapi import APIRouter, HTTPException, status
from service.satelite_service import SateliteService

router = APIRouter()
satelite_service = SateliteService() 

@router.get("/api/satelites")
def listar_satelites(sate_id: str | None = None):
    if sate_id:
        satelite = satelite_service.obtener_por_id(sate_id)
        if not satelite:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail=f"Satélite con ID {sate_id} no encontrado",
            )
        return satelite
    return satelite_service.obtener_todos()

#@router.get("/api/satelites/{sat_id}")
#def obtener_satelite(sat_id: str):
#    satelite = satelite_service.obtener_por_id(sat_id)
#    if not satelite:
#        raise HTTPException(
#            status_code=status.HTTP_404_NOT_FOUND,
#            detail=f"Satélite con ID {sat_id} no encontrado",
#        )
#    return satelite

import json
import os
import requests
from models.satelite import Satelite
import logging

logger = logging.getLogger(__name__)

class SateliteService:
    def __init__(self, archivo_satelites=f'{os.path.dirname(os.path.abspath(__file__))}/../data/satelites.json', orbit_url=""): #Acá iría por default, por si no se le pasa como parámetro (sirve para tenerlo de prueba)

        self.archivo_satelites = archivo_satelites #archivo donde se almacenan los satélites. Después consultar qué formato conviene más (dejar json o usar un csv)
        self.orbit_url = orbit_url
        if self.orbit_url != "":
            self.satelites = self.cargar_satelites()
        else:
            self.satelites = []

    def _conseguir_satelites(self):
        url = f'{self.orbit_url}/satellites'
        try:
            resp = requests.get(url, timeout=5)
            logger.debug(resp.json()) 
            if resp.status_code == 200:
                datos = resp.json()
                logger.debug(f'[d] Datos recibidos: {datos}')
                datos = [{**satelite, "descripcion": ""} for satelite in datos]
                with open(self.archivo_satelites, 'w', encoding='utf-8') as f:
                    json.dump(datos, f)
                return json.dumps(datos)
            else:
                logger.warning(f"Orbit respondió con status {resp.status_code} al pedir {url}")
                return []
        except requests.exceptions.Timeout:
            logger.error(f"La petición a Orbit ({url}) falló por timeout")
            return []

        except requests.exceptions.RequestException as e: # Por si Orbit está apagado o hay algún problema de red
            logger.error(f"Error de conexión con Orbit en {url}: {e}")
            return []

    def cargar_satelites(self):
        self._conseguir_satelites()

        with open(self.archivo_satelites, "r", encoding="utf-8") as f:
            datos = json.load(f)


        lista_satelites = []
        for d in datos:
            satelite = Satelite(
                sate_id=d["sate_id"],
                nombre=d["sate_name"],
                descripcion=d["descripcion"],
                fecha_lanzamiento=d["launch_year"],
            )
            lista_satelites.append(satelite)

        return lista_satelites

    def obtener_todos(self):
        if self.satelites == []:
            self.satelites = self.cargar_satelites()
        return self.satelites

    def obtener_por_id(self, sate_id):
        for satelite in self.satelites:
            logger.debug(f'[d] Satélite {satelite.nombre}, comparando {satelite.sate_id} con {sate_id}.')
            if int(satelite.sate_id) == int(sate_id):
                return satelite
        return None

# A chequear !! 
# Acá tendría que hacer también un endpoint interno 
# en caso de que se actualice el json y se agregue/elimine un satélite? 
# (como lo de actualizar imágenes)
# Ó no pasa nada si se cargan los satélites cada vez que se hace la petición??

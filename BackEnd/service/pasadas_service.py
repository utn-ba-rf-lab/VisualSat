# app/services/pasadas_service.py

import requests
import logging

logger = logging.getLogger(__name__)

class PasadasService:
    def __init__(self):

        self.orbit_url = "http://127.0.0.1:5000"

    def hacer_peticion(self, endpoint: str):

        url = f"{self.orbit_url}{endpoint}"

        try:
            resp = requests.get(url, timeout=5)

            if resp.status_code == 200:
                return resp.json()
            else:
                logger.warning(f"Orbit respondió con status {resp.status_code} al pedir {url}")
                return []

        except requests.exceptions.Timeout:
            logger.error(f"La petición a Orbit ({url}) falló por timeout")
            return []

        except requests.exceptions.RequestException as e: # Por si Orbit está apagado o hay algún problema de red
            logger.error(f"Error de conexión con Orbit en {url}: {e}")
            return []

    def obtener_todas(self):
        return self.hacer_peticion("/passes")

    def obtener_por_satelite(self, sat_id: str):
        return self.hacer_peticion(f"/passes?sate_id={sat_id}")

    def obtener_proxima(self):
        return self.hacer_peticion("/next")
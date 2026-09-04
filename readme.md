# VisualSat

Es un proyecto dentro de una investigación universitaria de la UTN, que logra mostrar la información recaudada por los satelites utilizados en dicha investigación en tiempo real.

Es un proyecto FullStack, por lo que utiliza React para el desarrollo del FrontEnd y FastApi para las expocisiones de Endpoints.

Para desplegar correctamente el hosteo de VisualSat hay que asegurarse de contar con las siguiente dependencias y seguir los siguientes pasos.

## FrontEnd

Al clonar el repositorio, simplemente bastara con la ejecucion de
```bash
npm i
```
para lograr descargar las depencias del FrontEnd del proyecto

Para levantarlo de manera local existen 2 formas

```bash
npm run dev
```
Para levantarlo sin restricciones


```bash
npm run dev:limited
```
Para levantarlo limitando el consumo de la memoria a 512MB

## BackEnd

### Obtener todos los usuarios

**GET** `/api/imagenes`

Obtiene la lista completa de las imagenes tomadas por todos los satelites

#### Response

```json
[
  {
    "id": 1,
    "nombre": "MSU-MR-1-Meteor-M2-4",
    "url": "https://visualsat.frba.utn.edu.ar/api/MSU-MR-1-Meteor-M2-4.png"
  }
]
```

**GET** `/api/imagenes/{satelite}`

Obtiene la lista completa de las imagenes tomadas por el satelite solicitado

#### Response

```json
[
  {
    "id": 1,
    "nombre": "MSU-MR-1-Meteor-M2-4",
    "url": "https://visualsat.frba.utn.edu.ar/api/MSU-MR-1-Meteor-M2-4.png"
  }
]
```
## Dependencias

Contar con entorno python local (opcional)

```bash
python3 -m venv venv
source venv/bin/activate
```

Descargar las librerías FastApi (framework), uvicorn (Servidor ASGI).
```bash
pip install fastapi uvicorn
```
Levantamos servidor
```bash
	uvicorn main:app --host 0.0.0.0 --port 8000 
```
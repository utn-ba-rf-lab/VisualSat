# VisualSat

Para desplegar correctamente el hosteo de VisualSat hay que asegurarse de contar con las siguiente dependencias y seguir los siguientes pasos.

## Dependencias:

Contar con entorno python local (opcional)

```bash
python3 -m venv venv
```

Descargar las librerías FastApi (framework), uvicorn (Servidor ASGI), jinja2 (Motor de plantillas html).
```bash
pip install fastapi uvicorn jinja2
```
Instalar mkcert
```bash
sudo apt install libnss3-tools
curl -JLO https://dl.filippo.io/mkcert/latest?for=linux/amd64
chmod +x mkcert-v*-linux-amd64
sudo mv mkcert-v*-linux-amd64 /usr/local/bin/mkcert
```
Creamos CA
```bash
mkcert -install
```
Creamos certificados Localhost
```bash
mkcert localhost
```
Levantamos servidor
```bash
	uvicorn main:app --host 0.0.0.0 --port 8000 \--ssl-keyfile=localhost-key.pem \--ssl-certfile=localhost.pem
```
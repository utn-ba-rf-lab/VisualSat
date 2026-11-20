import API from './api.js';

function buildError(error) {
  let message = 'Ocurrió un error al procesar la solicitud.';
  if (error && error.response) {
    const { status, data } = error.response;
    if (status === 404) {
      message = 'El recurso solicitado no fue encontrado.';
    } else if (data && typeof data.message === 'string') {
      message = data.message;
    }
  }
  return { ...error, message };
}

const ImagenesService = {
    obtenerImagenes(){
        return API.get('/imagenes')
            .then(r => r.data)
            .catch((e) => {throw buildError(e);});
    }
};

export default ImagenesService;
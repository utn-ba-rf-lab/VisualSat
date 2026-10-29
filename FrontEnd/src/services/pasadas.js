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

const PasadasService = {
	obtenerPasadas(params = {}) {
		return API.get('/pasadas', { params })
			.then(r => r.data)
			.catch((e) => {throw buildError(e); });
	},
	obtenerPasadasAnteriores(params = {}) {
		return API.get('/pasadas/past', { params })
			.then(r => r.data)
			.catch((e) => {throw buildError(e); });
	},
	obtenerProximaPasada(params = {}) {
		return API.get('/pasadas/next', { params })
			.then(r => r.data)
			.catch((e) => {throw buildError(e); });
	},
	obtenerUltimaPasadas(params = {}) {
		return API.get('/pasadas/last', { params })
			.then(r => r.data)
			.catch((e) => {throw buildError(e); });
	},
};

export default PasadasService;

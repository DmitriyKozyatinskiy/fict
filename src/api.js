import { API_URL, API_ENDPOINTS } from './constants';
import { sendRequest } from './utils/http';

export const API = {
  exportK3({ values }) {
    return sendRequest({
      url: `${API_URL}${API_ENDPOINTS.K3}`,
      method: 'POST',
      body: { values }
    });
  }
};

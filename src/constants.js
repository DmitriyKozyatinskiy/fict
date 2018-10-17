export const API_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://serene-fjord-66759.herokuapp.com/api'
    : 'http://localhost:3002/api';

export const API_ENDPOINTS = {
  K3: '/k3'
};

export const XLSX_MIME_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

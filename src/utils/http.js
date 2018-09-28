export const sendRequest = ({ url, method = 'GET', body }) =>
  fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        const isJSON = contentType && contentType.includes('application/json');
        return isJSON ? response.json() : Promise.resolve();
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch(error => {
      console.error('Error: ', error.message);
      throw new Error(error.message);
    });

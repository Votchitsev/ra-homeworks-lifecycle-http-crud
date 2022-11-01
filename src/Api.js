function request(method, id = 0, content = null) {
  const url = 'http://localhost:7777/notes/';

  let response;

  if (method === 'POST') {
    response = fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        id,
        content,
      }),
      headers: {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type',
        'Access-Control-Allow-Origin': '*',
      }
    })
  }

  if (method === 'GET') {
    response = fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return response;
}

export default request;
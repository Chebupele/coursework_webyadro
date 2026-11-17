const API_BASE = '/api/v1';

export async function apiRequest(path, { method = 'GET', body, signal } = {}) {
  const headers = new Headers({ Accept: 'application/json' });

  if (body !== undefined) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(API_BASE + path, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal,
  });

  if (response.status === 204) {
    return;
  }

  const contentType = response.headers.get('Content-Type') ?? '';
  const isJson = contentType.includes('application/json');
  const data = isJson ? await response.json() : undefined;

  if (!response.ok) {
    throw new Error(data?.message ?? 'Не удалось выполнить запрос', {
      cause: response.status,
    });
  }

  if (!isJson) {
    throw new Error('Сервер вернул ответ в неожиданном формате');
  }

  return data;
}

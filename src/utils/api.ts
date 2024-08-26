export async function makeGetRequest(endpoint: string) {
  const url = import.meta.env.VITE_API_BASE_URL + endpoint;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const BASE_URL = 'http://localhost:8000'; // ajuste se seu backend estiver em outro endereço

export async function fetchSensores() {
  const res = await fetch(`${BASE_URL}/sensores-filter/`);
  return res.json();
}

export async function fetchAmbientes() {
  const res = await fetch(`${BASE_URL}/ambientes-filter/`);
  return res.json();
}

export async function fetchHistorico() {
  const res = await fetch(`${BASE_URL}/historico-filter/`);
  return res.json();
}

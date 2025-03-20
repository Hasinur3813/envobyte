export async function getServices() {
  const response = await fetch(`http://localhost:3000/data/services.json`);
  return response.json();
}

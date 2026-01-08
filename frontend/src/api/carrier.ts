export interface Carrier {
  id: number;
  name: string;
  delay_days: number;
}

export async function fetchCarriers(): Promise<Carrier[]> {
  const response = await fetch("http://localhost:5000/api/carriers/");
  return response.json();
}

interface fetchDataProps {
  path: string;
  revalidate?: number;
}

export const useFetchData = async ({ path, revalidate }: fetchDataProps) => {
  const BASE_URL = "https://api.coingecko.com/api/v3";

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      accept: "application/json",
    },
    next: { revalidate },
  });
  if (!response.ok) throw new Error(`Request is Failed ${response.status}`);
  return response.json();
};

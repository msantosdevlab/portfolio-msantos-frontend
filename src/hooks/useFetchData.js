import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useFetchData(endpoint) {
  const { data, error, isLoading } = useSWR(
    `/api/proxy?endpoint=${endpoint}`,
    fetcher,
    {
      revalidateOnFocus: false, // Não refaz a requisição ao voltar para a aba
      dedupingInterval: 300000, // Mantém os dados no cache por 60s
      shouldRetryOnError: false, // Evita novas tentativas em caso de erro
    }
  );

  return { data, loading: isLoading, error };
}

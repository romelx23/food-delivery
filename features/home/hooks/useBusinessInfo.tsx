// src/hooks/useBusinessInfo.ts
import { useQuery } from "@tanstack/react-query";
import { fetchBusinessInfo } from "../helpers/sheet-helper";

export const useBusinessInfo = () => {
  return useQuery({
    queryKey: ["businessInfo"],
    queryFn: fetchBusinessInfo,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

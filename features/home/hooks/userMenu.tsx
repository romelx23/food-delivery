// src/hooks/useMenu.ts
import { useQuery } from "@tanstack/react-query";
import { fetchMenu } from "../helpers/sheet-helper";

export const useMenu = () => {
    return useQuery(
        {
            queryKey: ["menu"],
            queryFn: fetchMenu,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 5, // 5 minutes
        });
};
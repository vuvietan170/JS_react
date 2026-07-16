import { QueryClient } from "@tanstack/react-query";

// staleTime: du lieu duoc coi la moi trong 30s, sau 30s cac useQuery co cung queryKey se dung du lieu trong cache(bo nho dem) thay vi goi lai api => giam request du thua
export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 30_000 } },
});
// defaultOptions: cau hinh mac dinh cho tat ca cac query

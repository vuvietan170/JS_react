import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "../api/statsApi.js";
import { useFilter } from "../context/FilterContext.jsx";


export function useStats() {
  const { department } = useFilter();
  // khi department thay doi, RQ nhan nhan biet query key thay doi , tu kich hoat ham queryFn de lay du lieu moi
  return useQuery({
    queryKey: ["stats", department],
    queryFn: () => fetchStats(department),
  });
}

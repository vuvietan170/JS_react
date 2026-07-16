import { useStats } from "../hooks/useStats.js";

export function StatsView() {
  const { data, isLoading } = useStats();

  if (isLoading) return <p>Đang tải số liệu...</p>;

  return (
    <ul>
      <li>Đơn hàng: {data.sales}</li>
      <li>Người dùng: {data.users}</li>
      <li>Doanh thu: {data.revenue.toLocaleString("en-En")}vnd</li>
    </ul>
  );
}

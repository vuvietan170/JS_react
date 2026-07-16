import { useState } from "react";

// dong mo menu
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <button onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? "Mở rộng" : "Thu gọn"} menu
      </button>
      {!collapsed && (
        <ul>
          <li>Tổng quan</li>
          <li>Báo cáo</li>
          <li>Cài đặt</li>
        </ul>
      )}
    </div>
  );
}

import { useFilter } from "../context/FilterContext.jsx";

const OPTIONS = ["all", "sales", "marketing", "support"];

export function FilterBar() {
  const { department, setDepartment } = useFilter();

  return (
    <div>
      Phòng ban:
      {OPTIONS.map((opt) => (
        <button key={opt} onClick={() => setDepartment(opt)}>
          {opt === department ? "> " : ""}{opt}
        </button>
      ))}
    </div>
  );
}

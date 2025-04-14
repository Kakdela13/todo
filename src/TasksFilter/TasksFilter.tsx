type TFilters = {
  setFilter: (filter: TFilter) => void;
  filter: TFilter;
};
type TFilter = "all" | "active" | "completed";

export const Filters = ({ setFilter, filter }: TFilters) => {
  return (
    <ul className="filters">
      <li>
        <button
          className={`${filter === "all" ? "selected" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
      </li>

      <li>
        <button
          className={`${filter === "active" ? "selected" : ""}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={`${filter === "completed" ? "selected" : ""}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

import { TFilters, TFilter } from "../../TypeScript/TypeScript";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setFilter } from "./filtersSlice";

export const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filters.filter);

  return (
    <ul className="filters">
      <li>
        <button
          className={`${filter === "all" ? "selected" : ""}`}
          onClick={() => dispatch(setFilter("all"))}
        >
          All
        </button>
      </li>

      <li>
        <button
          className={`${filter === "active" ? "selected" : ""}`}
          onClick={() => dispatch(setFilter("active"))}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={`${filter === "completed" ? "selected" : ""}`}
          onClick={() => dispatch(setFilter("completed"))}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

import categories from "../Categories";

interface Props {
  onSelectCategory?: (category: string) => void;
}

function GrocerSelect({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory && onSelectCategory(e.target.value)}
    >
      <option value="">All</option>
      {categories.map((c) => (
        <option value={c} key={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default GrocerSelect;

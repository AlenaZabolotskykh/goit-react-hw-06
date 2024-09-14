import css from "./SearchBox.module.css";
export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.search}>
      <label htmlFor="username">Find contacts by name</label>
      <input
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        type="text"
        id="username"
      />
    </div>
  );
}

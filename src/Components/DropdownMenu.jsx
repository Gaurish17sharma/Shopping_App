import "./Styling/DropdownMenu.css";

export default function DropdownMenu({ categories, changeCategory }) {
  return (
    <div className="dropdown-menu">
      <ul>
        {categories?.map((item) => (
          <li
            onClick={() => {
              changeCategory(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
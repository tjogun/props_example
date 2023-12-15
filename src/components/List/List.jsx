import ListItem from "../ListItem/ListItem";
import "./List.scss";

export default function List(props) {
  return (
    <>
      <div className="c-list">
        {props.colors.map((color) => (
          <ListItem key={color.id} color={color.name} />
        ))}
      </div>
    </>
  );
}

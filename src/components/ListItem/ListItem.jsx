export default function ListItem({ color }) {
  return (
    <>
      <div
        style={{
          backgroundColor: color,
          padding: "8px",
          borderRadius: "8px",
          margin: "4px",
        }}
      >
        <p>{color}</p>
      </div>
    </>
  );
}

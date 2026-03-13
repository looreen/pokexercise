const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        backgroundColor: "lightgrey",
      }}
    >
      {children}
    </div>
  );
};

export default Card;

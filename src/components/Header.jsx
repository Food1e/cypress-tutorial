const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#ececec",
          textTransform: "lowercase",
          textAlign: "center",
        }}

        data-set='todo-header'
      >
        todos
      </h1>
    </header>
  );
};

export default Header;

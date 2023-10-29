import "./navbar.css"
let listStyle = {
    border: "1px solid white",
    marginTop: "10px"
  }
function Navbar() {
  return (
    <header
      style={{
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <nav>
        <ul className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;

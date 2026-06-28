import "./Navbar.css"


function Navbar() { //this function is a react component when we Write <Navbar/> React call this function and which jsx is return render on browser.
  return(
    <nav>
      <h2>Vishal Saxena</h2>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
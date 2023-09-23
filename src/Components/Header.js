import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="navbar">
      <h1>Runescape Flip Tracker</h1>
      <div className="links d-flex">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add-item">Add Item</Nav.Link>
      </div>
    </Navbar>
  )
}
 
export default Header
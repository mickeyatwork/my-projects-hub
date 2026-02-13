import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      {/* Link to the root path / */}
      <Link to="/" style={{ marginRight: '15px', fontWeight: 'bold' }}>Home</Link>
      
      {/* Link to the /about path */}
      <Link to="/about">About Me</Link>
    </nav>
  );
};

export default Navbar;
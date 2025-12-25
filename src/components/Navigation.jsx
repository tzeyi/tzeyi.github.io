import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav className="navbar bg-base-200/30 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-base-300">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl font-light tracking-wide normal-case">
          Your Name
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-1">
          {navItems.map(item => (
            <li key={item.name}>
              <Link 
                to={item.path}
                className={`font-light ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;
import PropTypes from 'prop-types';

function NavBar({ children }) {
  return (
    <>
    <nav className="className='mx-7 mb-3 text-theothergraycolor font-semibold flex justify-between">
      {children}
    </nav>
    <hr className='mb-4 text-graycolor'/>
    </>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;

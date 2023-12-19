import PropTypes from 'prop-types';


function ButtonsNavBar ({ children }) {
    return (
        <div className='flex gap-1'>
            {children}
        </div>
    )
} 

ButtonsNavBar.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default ButtonsNavBar;
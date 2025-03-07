import PropTypes from 'prop-types';


export default function Button ({label,disabled = false,onClick}) {
    return ( 
        
    <button disabled ={disabled} onClick={onClick}>{label}</button>

   
)
}
Button.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}
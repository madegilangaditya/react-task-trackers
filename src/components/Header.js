import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add' : 'Close'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title:'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black',

// }

export default Header

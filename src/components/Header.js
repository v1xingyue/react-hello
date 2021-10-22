
import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    const [message, setMessage] = useState("hello react world.");
    const [currentTime, setCurrentTime] = useState(new Date().toUTCString());

    setTimeout(() => {
        setMessage("changed after 3 seconds....");
    }, 3000);

    setTimeout(() => {
        setCurrentTime(new Date().toISOString())
    }, 100);


    return <div style={{ textAlign: 'center' }}>
        <h1>Hello {props.name}</h1>
        <h2>{props.message}</h2>
        <button>Click Me</button>
        <p>{message}</p>
        <p>{currentTime}</p>
    </div>
}

Header.defaultProps = {
    message: 'Today will be better.'
}

Header.propTypes = {
    message: PropTypes.string.isRequired
};
export default Header;
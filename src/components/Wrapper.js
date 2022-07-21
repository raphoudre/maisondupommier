import React from 'react';
import Navigation from './Navigation';
import '../styles/Containers.css'

const Wrapper = (props) => {
    return (
        <div className='wrapperContainer'>
            <div className='navContainer'>
                <Navigation/>
            </div>
            <div className='childContainer'>
                {props.children}
            </div>
        </div>
    );
};

export default Wrapper;
import React from 'react';

const Box = ({color, idx}) => {
    return (
        <span style={{width:"200px", height:"200px", backgroundColor:color, display:"inline-block"}}>
        </span>
    )
}

export default Box;
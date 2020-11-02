import React, {useState} from 'react';
import BoxGenerator from './BoxGenerator';
import Form from './Form';

const BoxDisplay = () => {
    const [colors, setColors] = useState([]);

    const addColor = (color) => {
        setColors([...colors, color]);
    }

    return (
        <div>
            <Form addColor={addColor} />
            <BoxGenerator colors={colors} />
        </div>
    )
}

export default BoxDisplay;
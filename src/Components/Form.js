import React, { useState } from 'react';

const Form = props => {
    const [color, setColor] = useState("");

    const createColor = e => {
        e.preventDefault();
        props.addColor(color);
        setColor("");
    }

    return (
        <div>
            <form onSubmit={createColor}>
                <label htmlFor="color">Color</label>
                <input type="text" name="color" value={color} onChange={e => setColor(e.target.value)} />

                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default Form;
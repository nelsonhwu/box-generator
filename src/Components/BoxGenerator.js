import React, { useState } from 'react';
import Box from './Box';

const BoxGenerator = ({colors}) => {
    
    return (
        <div>
        {
            colors.map((val,idx) =>
                <Box key={idx}
                    color={val}
                    idx={idx}
                />
            )
        }
        </div>
    )

}

export default BoxGenerator;
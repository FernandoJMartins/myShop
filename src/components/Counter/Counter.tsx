import React, { useState } from "react";

export const Counter: React.FC = () => {
 
    const [value, setValue] = useState(0);
 
    return (
        <section>
            <h1>{value}</h1>
        
        <div>
            <button onClick={() => setValue(value+1)}>+</button>
            <button onClick={() => setValue(value-1)}>-</button>
        </div>

        </section>
    )

}
import React, { useEffect, useState } from 'react'

const ColorPicker: React.FC = () => {

    const [color, setColor] = useState<string>('');

    const colors = [
        'red',
        'yellow',
        'pink'
    ];

    useEffect(() => {
        document.body.style.backgroundColor = color || 'white';
    }, [color])
    
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setColor(event?.target.value);
    }

  return (
    <section style={{backgroundColor: color}}> 
        <select name="color" value={color} onChange={handleChange}>
            <option value="">Select color</option>
            {
                colors.map((color, index) => (
                    <option value={color} key={index}>{color}</option>
                ))
            }
        </select>
    </section>
  )
}

export default ColorPicker
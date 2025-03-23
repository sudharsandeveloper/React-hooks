import React, { useState } from 'react'

const InputView: React.FC = () => {
  const [input, setInput] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  return (
    <section>
      <input type="text" value={input} onChange={handleChange}/>
      <p>{input}</p>
    </section>
  )
}

export default InputView
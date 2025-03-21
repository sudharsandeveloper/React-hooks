import { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState<string[]>(['milk']);
  const [inputValue, setInputValue] = useState<string>('');

  const addmore = () => {
    if (inputValue.trim()) {
      setItems((prev) => [...prev, inputValue]);
      setInputValue('');
    }
  };

//   "_" - placeholder for the all items and represents we don’t need it

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section>
      <h1>Todo Add Remove</h1>
      <input
        type="text"
        name="name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addmore}>Add</button>
      {items.map((item, index) => (
        <div key={index}>
          <span>{index + 1}</span>
          <span>{item}</span>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
    </section>
  );
};

export default Todo;
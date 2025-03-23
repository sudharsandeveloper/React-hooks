import React, { useState } from 'react'

const FormData: React.FC = () => {
    const [formData, setFormData] = useState<formVals>({
        name: '',
        email: '',
        password: '',
        age: undefined
    });

    interface formVals {
        name: string,
        email: string,
        password: string,
        age?: number
    }

    console.log("data", formData);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        setFormData(() => ({
            name: '',
            email: '',
            password: '',
            age: undefined
        }))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev, [name]: name === 'age' ? Number(value):value,
        }));
    }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='name' onChange={handleChange}/>
            <input type="email" name='email' placeholder='email' onChange={handleChange}/>
            <input type="password" name='password' placeholder='password' onChange={handleChange}/>
            <input type="text" name='age' placeholder='age' onChange={handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    </section>
  )
}

export default FormData;
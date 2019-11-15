import React from 'react'
import './Form.css'

const Form = () => (
    <div className="form-add">
        <form>
            <input type="text" method="POST" placeholder="Name" required/>
            <textarea type="text" method="POST" placeholder="Description" required/>
            <button className="add-but">Add</button>
        </form>
    </div>
);

export default Form;
import axios from 'axios';
import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValues = {
    name: '',
    age: '',
    email: '',
};


export default function AddFriendForm() {
    const {push} = useHistory;
    const [formValues, setFormValues] = React.useState(initialValues);
    const handleChanges = e =>{
        setFormValues({...formValues, [e.target.name]: e.target.value})
    };
    const handleSubmit = e =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', formValues)
        .then((res =>{
            push("/friends");
        })
        .catch((err) => console.log({err});
    };
    return (<div>
        <h3>Add New Friend</h3>
        <form>
            <label htmlFor ="name">
                <input id ="name" name ="name" value={formValues.name} onChange={handleChanges}>
                name
                </input>
            </label>
            <label>
                <input id = "age" name = "age" value={formValues.age} onChange={handleChanges}>
                age
                </input>
            </label>
            <label>
                <input id = "email" name ="email" value={formValues.email} onChange={handleChanges}>
                email
                </input>
            </label>
            <button onChange={handleSubmit}>Add Friend</button>
        </form>
        </div>
       
    )
}

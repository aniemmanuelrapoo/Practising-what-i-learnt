import React from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { withRouter } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react/cjs/react.development';

const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [errors, setErrors] = useState({})

    const onSubmit = async (e) => {
        e.preventDefault();

        //Check For Errors
        if(name === ''){
            setErrors({...errors, nameErr: 'Name is required'});
            // return;
        }

        if(email === ''){
            setErrors({...errors, emailErr: 'Email is required'});
            // return;
        }

        if(phone === ''){
            setErrors({...errors, phoneErr: 'Phone is required'});
            // return;
        }

        return

        // const newContact = {
        //     name,
        //     email,
        //     phone
        // }
        // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // dispatch({ type: 'ADD_CONTACT', payload: res.data })

        //clear State
        
        setName("")
        setEmail("")
        setPhone("")
        setErrors({ nameErr: '', emailErr: '', phoneErr: '' })
        
        // this.props.history.push('/');
    }

    // onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    return(
        <div className='card mb-3'>
        <div className="card-header">Add Contact</div>
        <div className="card-body">
            <form onSubmit={onSubmit}>
                <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    error={errors.nameErr !== '' ? errors.nameErr : null}
                />

                <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    error={errors.emailErr !== '' ? errors.emailErr : null}
                />

                <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    error={errors.phoneErr !== '' ? errors.phoneErr : null}
                />

                <input type="submit" value="Add Contact" className='btn btn-block btn-light' />
            </form>
        </div>
        </div>
    )
    
}

export default withRouter(AddContact);

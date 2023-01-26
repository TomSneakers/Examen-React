import React, { useState } from 'react';
import './myForm.css'
import { validatePhone } from './../utils/utils'
const Myform = (props) => {
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredPhone, setEnteredPhone] = useState('')
    const [error, setError] = useState(false)

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };
    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value)
    };
    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault()

        if (enteredAge == '' || enteredName == '' || enteredMail == '') {
            setError(true)
        }
        else {

            // test si phone is valid si oui on fait rien si non return             
                console.log("test")
            const myFormData = {
                name: enteredName,
                age: enteredAge,
                mail: enteredMail,
                phone: enteredPhone
            }

            props.onSave(myFormData);
            setEnteredAge('');
            setEnteredName('');
            setEnteredMail('');
            setEnteredPhone('');
            setError(false)
            }
            
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label className='name'>
                        Nom:
                    </label>
                    <input type='text' value={enteredName} onChange={nameChangeHandler}></input>

                    <label className='age'>
                        Age:
                    </label>
                    <input type="text" value={enteredAge} onChange={ageChangeHandler}></input>

                    <label className='mail'>
                        Mail:
                    </label>
                    <input type='email' value={enteredMail} onChange={mailChangeHandler}></input>

                    <label className='phone'>
                        Téléphone:
                    </label>
                    <input type="text" pattern= '(06|07)[0-9]{8}' value={enteredPhone} onChange={phoneChangeHandler}></input>
                </div>
                <div>
                    <button type="submit" >Envoyer</button>
                    {
                        error ? <div className='error'>Veuillez remplir tous les champs</div> : "" 
                    }
                </div>
            </div>
        </form>
    )
}
export default Myform
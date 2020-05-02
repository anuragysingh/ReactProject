import React from 'react';
import classes from './Person.module.css';

const person = (props) => {
    return (
        <React.Fragment>
            <p onClick={props.click} className={classes.personheading}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </React.Fragment>
    )
}

export default person;
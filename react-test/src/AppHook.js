// Component created using hooks such as useState

import React, { useState } from "react";
import Person from './containers/Person/Person';

// Note: Name should begin with capital letter
const AppHook = props => {
    // useState will return two elements one for current state and other for setState function to render UI
    const [personsState, setPersonsState] = useState({
        persons: [{ name: 'Anurag', age: 30 }, { name: 'Priya', age: 25 }]
    });

    //note: other state/state needs to be copied or defined since it will be lost when using
    // useState so use multiple useState for each state items
    const [otherState, setOtherState] = useState({
        otherstate: "other state data"
    });

console.log(personsState, otherState);

    const switchNameHandler = () => {
        console.log('Handler clicked!');
        setPersonsState({
            persons: [{ name: 'Anurag1', age: 30 }, { name: 'Priya1', age: 25 }],
            

        });
    };

    return (
        <React.Fragment>
            <h1>Hello! My first React Hook app</h1>
            <button onClick={switchNameHandler}>Switch name</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
                My hobbies are: Dancing
            </Person>
        </React.Fragment>
    )
}

export default AppHook;
import React, { Component } from "react";
import Person from '../../containers/Person/Person';

class Blog extends Component {

    state = {
        persons: [
            { id: 'v12341', name: 'Anurag', age: 30 },
            { id: 'v12342', name: 'Priya', age: 25 },
            { id: 'v12343', name: 'Aarush', age: 10 },],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        console.log('Handler clicked!');
        this.setState({
            persons: [{ name: newName, age: 30 }, { name: 'Priya1', age: 25 }]
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1); // remove first element from the state
        this.setState({ persons });
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });

        const personToFind = {
            ...this.state.persons[personIndex]
        }

        personToFind.name = event.target.value;

        const personToReplace = [...this.state.persons];
        personToReplace[personIndex] = personToFind;


        this.setState({
            persons: personToReplace
        });
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>)
        }

        return (
            <div>
                <h2>Blog - Default persons</h2>
            <button onClick={this.switchNameHandler.bind(this, 'Anurag 3')}>Switch name</button>
            <button onClick={this.togglePersonHandler}>Toggle Person</button>
		{ persons }
        </div>
    );
    }


}

export default Blog;
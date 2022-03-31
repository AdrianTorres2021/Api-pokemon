import {useEffect, useState} from 'react';
const Example = (props) => {
    const [people, setPeople] = useState([]);
    const [password, setPassword] = useState(""); 
    useEffect(() => {
        return () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
        }
    }, [password]); 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
            <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            <button onClass="clase" value="hello!" onClick={ e => setPassword("hi")}>Click me!</button> 
        </div>
    );
}
export default Example;

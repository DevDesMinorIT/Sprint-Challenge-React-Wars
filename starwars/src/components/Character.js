// Write your Character component here
import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import axios from 'axios';
import CharacterList from './characterList';

const Character = (props) => {
    const[character, setCharacter] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://swapi.py4e.com/api/people/')
        .then(response => {
            console.log('res', response.data)
            setCharacter(response.data.results)
        })
        .catch(error=> console.log('Error!!!', error))
    }, []) 
    return(
        character.map(char => {
        return (
            <CharacterList character={char} />
        
        ) 
        }))
 
}

export default Character;
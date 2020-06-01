import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import axios from 'axios';
import Character from './Character';

const CharacterList = (props) => {
    console.log(props);
    return <>
        <Card>
            <CardImg top-width='50%' src='' alt='Character Card'/>
            <CardBody className='bgcolor'>
                <h1>{props.character[0].name}</h1>
                <CardText>Description</CardText>
            </CardBody>
        </Card>
    </>
}

export default CharacterList;
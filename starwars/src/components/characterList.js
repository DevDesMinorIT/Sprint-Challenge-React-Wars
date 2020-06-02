import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import axios from 'axios';
import Character from './Character';

const CharacterList = (props) => {
    console.log(props);
    return <>
        <Row className='row' lg='12'>
            <Col lg='6' sm='6'>
            <Card className='card'>
                {/* <CardImg top-width='50%' src='{props.character.url}' alt='Character Card'/> */}
                <CardBody className='bgcolor'>
                    <h1>{props.character.name}</h1>
                    <CardText>Height: {props.character.height}</CardText>
                    <CardText>Mass: {props.character.mass}</CardText>
                    <CardText>Hair Color: {props.character.hair_color}</CardText>
                </CardBody>
            </Card>
            </Col>
        </Row>
    </>
}

export default CharacterList;
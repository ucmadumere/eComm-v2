import React from 'react';
import { Container } from 'react-bootstrap';
import topher from '../assets/topher.jpg'

const TopHeader = () => {
  return (
    <Container fluid='md' >
        <img src={topher} alt="topHeader" className='topheader' /> 
    </Container>
  )
}

export default TopHeader
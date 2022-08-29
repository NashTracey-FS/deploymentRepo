import {TikTokEmbed} from 'react-social-media-embed'
import React from 'react'
import iconBlue from '../images/icon blue.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function Latest(){
    return(
       <Container>
            <h2>Latest</h2>
            <p>Check out the latest videos from <b>DeadRhose</b></p>
        <Row className="justify-content-md-center">
                <b>YouTube</b>
            <Col md="auto">

                <iframe width="560" height="315" src="https://www.youtube.com/embed/fQ-AcPGWI4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
        </Row>
        <Row className="justify-content-md-center">  
            <Col  md="auto">
            <b>TikTok </b>
            <TikTokEmbed url="https://www.tiktok.com/@deadrhose_games/video/7104436810394258734" />

            </Col>
        </Row>    
        </Container>
    )
}

export default Latest;
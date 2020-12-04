import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Inputing.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Row } from 'react-bootstrap';
import { Container } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

function Inputing(){
    return(
        <div className="inputing">
        
        <form>
        <div className="workout">
                <Accordion>
                    <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon/>}>
                        <span className="title">Workout</span>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <Row>
                                <Col>
                                <Checkbox color="primary" name="" />
                                <label>Chest</label>
                                </Col>
                                <Col>
                                <Checkbox color="primary" name="" />
                                <label>Back</label>
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Checkbox color="primary" name="" />
                                <label>Leg</label>
                                </Col>
                                <Col>
                                <Checkbox color="primary" name="" />
                                <label>Shoulder</label>
                                </Col>
                            </Row>
                            <Row>
                            <Col>
                                <Checkbox color="primary" name="" />
                                <label>Bicep</label>
                                </Col>
                                <Col>
                                <Checkbox color="primary" name="" />
                                <label>Tricep</label>
                                </Col>
                            </Row>
                        </Container>
                    </AccordionDetails>
                </Accordion>
        </div>
        
        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>Onde treinar</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>NUMERO DE EXERCICIOS</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>Numero exercicios</h1>
                <h1>....</h1>
            </Grid>
        </div>

        <div className="Outside_indoor">
            <Grid container direction="column" justify="space-around" alignItems="flex-start">
                <h1>button submmit</h1>
                <h1>....</h1>
            </Grid>
        </div>
        </form>
        </div>
    );
}

export default Inputing;
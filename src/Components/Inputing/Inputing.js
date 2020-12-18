import React, {useState} from 'react';
import './Inputing.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Row } from 'react-bootstrap';
import { Container, RadioGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';


function Inputing() {

    const [place, setPlace] = useState(0);

    const updatePlace = (event) => {
        console.warn(event.target.value);
        setPlace(event.target.value);
    }

    function valuetext(quantity) {
        return `${quantity}`;
    }

    const mark = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 10,
            label: '10',
        },
    ];

    return (
        <div className="inputing">
            <form method="POST" action="/genwork">
                <div className="workout">
                    <Accordion>
                        <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
                            <span className="title">Workout</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Container>
                                <Row>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="chest" />
                                        <label>Chest</label>
                                    </Col>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="back" />
                                        <label>Back</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="bicep" />
                                        <label>Bicep</label>
                                    </Col>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="tricep" />
                                        <label>Tricep</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="forearm" />
                                        <label>Forearm</label>
                                    </Col>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="shoulder" />
                                        <label>Shoulder</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="quad" />
                                        <label>Quad</label>
                                    </Col>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="hamstring" />
                                        <label>Hamstring</label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="calves" />
                                        <label>Calves</label>
                                    </Col>
                                    <Col>
                                        <Checkbox color="primary" name="workout" value="abs" />
                                        <label>Abs</label>
                                    </Col>
                                </Row>
                            </Container>
                        </AccordionDetails>
                    </Accordion>
                </div>

                <br />

                <div className="Outside_indoor">                   
                        <div className="Place">
                            <Accordion>
                                <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="title">Place</span>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <RadioGroup value={place} onChange={updatePlace} name="place">
                                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                                        <FormControlLabel value="gym" control={<Radio />} label="Gym" />
                                        <FormControlLabel value="outside" control={<Radio />} label="Outside" />
                                    </RadioGroup>
                                </AccordionDetails>
                            </Accordion>
                        </div>      
                </div>

                <br />

                <div className="Outside_indoor">
                        <Accordion>
                            <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
                                <span className="title">Number of exercises</span>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Slider
                                    defaultValue={0}
                                    getAriaValueText={valuetext}
                                    aria-labelledby="discrete-slider-small-steps"
                                    step={1}
                                    marks
                                    min={0}
                                    max={10}
                                    valueLabelDisplay="auto"
                                    marks={mark}
                                    name="quantity"
                                />
                            </AccordionDetails>
                        </Accordion>
                </div>

                <br />

                <div className="Outside_indoor">
                        <Accordion>
                            <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
                                <span className="title">Equipment</span>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Container>
                                    <Row>
                                        <Col>
                                            <Checkbox color="primary" name="equipment" value="bench" />
                                            <label>Bench</label>
                                        </Col>
                                        <Col>
                                            <Checkbox color="primary" name=""equipment value="dumbbell" />
                                            <label>Dumbbell</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Checkbox color="primary" name="equipment" value="barbell" />
                                            <label>Barbell</label>
                                        </Col>
                                        <Col>
                                            <Checkbox color="primary" name="equipment" value="cable" />
                                            <label>Cables</label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Checkbox color="primary" name="equipment" value="smith machine" />
                                            <label>Smith machine</label>
                                        </Col>
                                        <Col>
                                            <Checkbox color="primary" name="equipment" value="leg press" />
                                            <label>Leg press </label>
                                        </Col>
                                    </Row>
                                </Container>
                            </AccordionDetails>

                        </Accordion>
                </div>

                <br />

                <div className="Outside_indoor">
                        <Button type="submit" variant="contained" color="secondary" fullWidth>
                            Começar Treino!
                        </Button>
                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


            </form>
        </div>
    );
}

export default Inputing;
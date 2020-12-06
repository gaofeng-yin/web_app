import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Inputing.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Col, Row } from 'react-bootstrap';
import { Container, FormGroup, makeStyles, MenuItem, RadioGroup } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


function Inputing() {

    const [place, setPlace] = React.useState(0);

    const updatePlace = (event) => {
        console.warn(event.target.value);
        setPlace(event.target.value);
    }

    function valuetext(quantity) {
        return `${quantity}`;
    }

    const marks = [
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
        {
            value: 15,
            label: '15',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 35,
            label: '35',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 45,
            label: '45',
        },
        {
            value: 50,
            label: '50',
        },
    ];

    return (
        <div className="inputing">
            <form>
                <div className="workout">
                    <Accordion>
                        <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
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

                <br />

                <div className="Outside_indoor">                   
                        <div className="Place">
                            <Accordion>
                                <AccordionSummary className="summary" expandIcon={<ExpandMoreIcon />}>
                                    <span className="title">Place</span>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <RadioGroup value={place} onChange={updatePlace}>
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
                                    max={50}
                                    valueLabelDisplay="auto"
                                    marks={marks}
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

                <br />

                <div className="Outside_indoor">
                        <Button variant="contained" color="secondary" fullWidth>
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
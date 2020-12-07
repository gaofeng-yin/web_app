import React from 'react';
import Container from '@material-ui/core/Container';
import Inputing from '../Inputing/Inputing';
import Outputing from '../Outputing/Outputing';
import {Row} from 'react-bootstrap';

function Content() {
  return (
    <React.Fragment>
        <Container maxWidth="xl">
          <Row>
            <Inputing />
            <Outputing />
          </Row>
        </Container>
    </React.Fragment>
  );
}

export default Content;

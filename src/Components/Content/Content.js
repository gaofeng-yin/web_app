import React from 'react';
import Container from '@material-ui/core/Container';
import Inputing from '../Inputing/Inputing';
import Navbar from "../Navbar/Navbar";

function Content() {
  return (
    <React.Fragment>
      <Navbar />
        <Container maxWidth="xl">
            <Inputing />
        </Container>
    </React.Fragment>
  );
}

export default Content;

import React from 'react';
import Container from '@material-ui/core/Container';
import Inputing from '../Inputing/Inputing';
import Outputing from '../Outputing/Outputing';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Content() {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Inputing />
        <Outputing />
      </Container>

    </React.Fragment>
  );
}

export default Content;

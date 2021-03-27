import React from 'react';
import { Grid } from '@material-ui/core';
import { Container, Title, Subtitle } from './styles';
import Card from '../Card';

function InfoTag(props) {
  const { title, subtitle, prefix, sufix } = props;
  return (
    <Grid item xs={2}>
      <Card>
        <Container>
          <Title>{title}</Title>
          <Subtitle>{prefix} {subtitle?.toLocaleString()} {sufix}</Subtitle>
        </Container>
      </Card>
    </Grid>
  )
}

export default InfoTag;
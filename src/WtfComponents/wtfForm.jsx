import React, { Component } from 'react';
import styled from 'styled-components';

const wtfForm = styled.form`
  display: grid;
  width: 50vw;
  grid-template-rows: 150%;
  grid-template-columns: 1fr;
  justify-items: left;
  grid-gap: 2%;

  .wtf-group {
    width: 100%;
    display: grid;
    grid-gap: inherit;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  }
`;

export default wtfForm;

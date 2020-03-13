import React from 'react';
import Textfield from '../../components/TextField/TextField';
import { Container } from '../../components/TextField/style';
import Slider from '../../components/Slider/Slider';
import { banner } from '../../configs/constants';

const TextFieldDemo = () => (
  <>
    <Container>
      <div>
        <div>
          <Slider alt="No Image" duration="2000" height="400" random banner={banner} />
        </div>
      </div>
      <h3>This is a disable Input</h3>
      <Textfield placeholder="Disabled Input" disabled />
      <h3>a Valid Input</h3>
      <Textfield primary placeholder="accessible" bgcolor />
      <h3>an Input with Errors</h3>
      <Textfield placeholder="101" error bgcolor />
      <p style={{ color: 'red' }}>could not be greater than 100 </p>

    </Container>
  </>
);
export default TextFieldDemo;

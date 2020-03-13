import React from 'react';
import { Textfield } from '../../components/TextField/TextField';
import { SelectField } from '../../components/SelectField/SelectField';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';
import { SelectOptions, RadioCricket, RadioFootball } from '../../configs/constants';

class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      sports: '',
      cricket: '',
      football: '',
    };
  }

  onChangedTextField = (e) => {
    this.setState({ name: e.target.value });
    console.log(this.state);
  };

  onChangedSelectField = (e) => {
    this.setState({ cricket: '', sports: '' });
    this.setState({ sports: e.target.value });
  };

  onChangedRadioGroup = (e) => {
    const { sports } = this.state;
    this.setState({ cricket: '', football: '' });
    this.setState({ [sports]: e.target.value });
  };

  getRadioOptions = () => {
    const { sports } = this.state;
    return (sports === 'cricket') ? RadioCricket : RadioFootball;
  }

  render() {
    console.log(this.state);
    const { sports, name } = this.state;
    return (
      <div>
        <h3>Name</h3>
        <Textfield value={name} onChange={this.onChangedTextField} />
        <h3>Select the Game you play</h3>
        <SelectField onChange={this.onChangedSelectField} defaultoptions="Select" options={SelectOptions} />
        {
          (sports === '') || (sports === 'Select') ? false : (
            <>
              <h3>What do You do</h3>
              <RadioGroup onChange={this.onChangedRadioGroup} options={this.getRadioOptions()} />
            </>
          )
        }
      </div>
    );
  }
}
export default InputDemo;

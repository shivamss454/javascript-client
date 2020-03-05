import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Slider extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    console.log('hiii', props);
    super(props);
    this.state = {
      name: 'shivam',
      course: 'mca',
    };
  }

   renderstudent = () => {
     const { name, course } = this.state;
     return (
       <>
         <p>
name:
           {name}
           {' '}

         </p>
         <p>
course:
           {course}
         </p>
       </>
     );
   }

   render() {
     // eslint-disable-next-line react/prop-types
     const { name } = this.props;
     return (
       <div>
         {this.renderstudent()}
         <input type="text" value={name} />
         <h1>class Component </h1>
       </div>
     );
   }
}
export default Slider;

// import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// const e = React.createElement;

// var name1 = "Ajenda";
// var name2 = "Scotty Security";
// var name3 = "CD39L3 Research Paper";

// class Card extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>This is my project</p>
//         </div>
//     );
//   }
// }

// const ajendaContainer = document.getElementById("ajenda");
// const scottyContainer = document.getElementById("scotty");
// const paperContainer = document.getElementById("paper");

// ReactDOM.render(<Card name="Ajenda" />, ajendaContainer);
// ReactDOM.render(<Card name="Scotty Security" />, scottyContainer);
// ReactDOM.render(<Card name="CD39L3 Research Paper" />, paperContainer);

'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#ajenda');
ReactDOM.render(e(LikeButton), domContainer);
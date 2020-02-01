import React from 'react';


export default class Board extends React.Component {
  render() {
    return (
      <svg viewBox="0 0 300 300" width="500" height="500" className="board">
        <line x1="100" y1 ="0" x2="100" y2="300" stroke="red"/>
        <line x1="200" y1 ="0" x2="200" y2="300" stroke="red"/>
        <line x1="0" y1 ="100" x2="300" y2="100" stroke="red"/>
        <line x1="0" y1 ="200" x2="300" y2="200" stroke="red"/>
        <text x="150" y="150" height="80" dominant-baseline="middle" text-anchor="middle"
          >x</text>
      </svg>
    )
  }
}


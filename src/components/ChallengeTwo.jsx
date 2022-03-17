import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    students: [],
  };
  //a lifecycle method will execute when the page has loaded (this will only run once)
  componentDidMount() {
    this.setState(() => ({
      students: studentList,
    }));
  }

  //random button handler
  randomize = (event) => {
    //shuffle the array and set the state
    event.preventDefault();

    function shuffle(array) {
      for(var i = (array.length - 1); 0 < i; i--){
        var r = Math.floor(Math.random() * (i + 1));
    
        var tmp = array[i];
        array[i] = array[r];
        array[r] = tmp;
      }
      return array;
    }

    const shuffleStudents = shuffle(studentList)

    this.setState(() => ({
      students: shuffleStudents
    }));
    
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.students.map((student, index) => (
                <li key={index}>{student}</li>
              ))}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}

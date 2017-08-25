import React, { Component } from 'react'

import './image.scss'

export default class image extends Component {
  
  constructor (props) {
    super(props);
    
    this.state = {
      data:
      [
        {
          'id':1,
          'name':'Foo',
          'age':'20'
        },
				
        {
          'id':2,
          'name':'Bar',
          'age':'30'
        },
				
        {
          'id':3,
          'name':'Baz',
          'age':'40'
        }
      ]
    }
    
    
    const foo = {
      a () {},
      b () {}
    };
    
    foo.a();
    
    const name = 'James';
    
    this.state.welcome = `Hello, ${name}!`;
    
    for (let i=10; i; i--) {
      (function () { return i; })();
    }
    
    
    this.state.map((i) => {
      const fsd = i;
    })
    
  }
  
  render () {
    return (
      <div>
        <img className='image' src={`./images/${this.props.src}.jpg`} />
        
        <h1>{this.state.welcome}</h1>
        
        
      </div>
    )
  }
}

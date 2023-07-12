import React from "react"


class Item extends React.Component   //here, class is my component name with the specific name item which I'll call in the body of the function App using JSX ie, Html syntax in javascript. 
{

  constructor (props) {
    super(props)  //this makes all other props from diff. components where "Item" extends to, to be available to us in this place.
    this.state = {
      clicks: 0, //'clicks' here is a here while '0' is a value. I can add as much key-value pairs as I want.
      totalRemaining: 100,
    }
  }

  clickMe() {
    this.setState ({
      clicks: this.state.clicks + 1,
      totalRemaining: this.state.totalRemaining -1
    })
    // this clickMe is a function name that adds an action to the event onClick which is an old school html syntax
  }

  render () //render method which looks like a function.
    {
    return (
      //return statement
      <div>
        <h1 onClick={() => this.clickMe()}>Hello from {this.props.name} </h1> 
        {/* //'this' refers to this particular class not another one. */}
       <span>{this.state.clicks} is the number of clicks. {this.state.totalRemaining}</span>
      </div>
      
      
    )
  }
}

export default Item;
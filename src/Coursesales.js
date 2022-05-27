import React, { Component } from "react";
import Course from "./course";

class CoursePage extends Component {
  sumPrice(price) {
    this.setState({ total: this.state.total + price });
  }

  constructor(props) {
    super();

    this.state = {
      total: 0,
    };

    this.sumPrice = this.sumPrice.bind(this);
  }
  render() {
    let courses = this.props.items.map((item, i) => {
      return (
        <Course
          name={item.name}
          price={item.price}
          key={i}
          sumPrice={this.sumPrice}
          active={item.active}
        />
      );
    });
    console.log(this.props.items);
    return (
      <div>
        <h1>Available Courses:</h1>
        <div id="courses">
          {courses}
          <p id="total">
            Total <b>{this.state.total}</b>
          </p>
        </div>
      </div>
    );
  }
}

export default CoursePage;

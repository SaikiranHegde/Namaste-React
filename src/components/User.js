import React from "react";
import UserContext from "../utils/UserContext";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // Update state in class based component
    // this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    // API call is made here, before useEffect hook was present
  }

  // Old way of writing, without useEffect hook
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // post state updates
    }
  }
  componentWillUnmount() {}

  render() {
    return (
      <section>
        <div className="header-2">Name: {this.props.name}</div>
        <div>Location: {this.props.location}</div>
        <div>Contact: {this.props.contact}</div>
        <div>Count: {this.state.count}</div>
        <UserContext.Consumer>
          {({ userName }) => (<div className="text-blue-700">{userName}</div>)}
        </UserContext.Consumer>
      </section>
    );
  }
}

export default User;

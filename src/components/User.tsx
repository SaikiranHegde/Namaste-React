import React from "react";
import UserContext from "../utils/UserContext";
import { UserProps, UserState } from "../types/user";

class User extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
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
  componentDidUpdate(prevProps: UserProps, prevState: UserState) {
    if (this.state?.count !== prevState.count) {
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

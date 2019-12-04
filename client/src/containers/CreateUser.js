import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../services/UserService";
import ToastMsg from "../components/ToastMsg";

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        userEmail: "",
        userPassword: ""
      },
      toastMsg: "",
      showToast: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.userEmail && user.userName && user.userPassword) {
      console.log("user::->", user);
      createUser(user)
        .then(res => {
          this.setState({
            // create a new objct spread operater
            ...this.state,
            toastMsg: res.result,
            showToast: true,
            submitted: false
          });
        })
        .catch(error => console.error("Error While Creating new user:", error));
        this.resetHandler();
    }
  }
  resetHandler = () => {
    this.setState({
      user: {
        userName: "",
        userEmail: "",
        userPassword: ""
      },
      toastMsg: "",
      showToast: false,
      submitted: false
    });
  };
  render() {
    const { user, submitted } = this.state;
    return (
      <div>
        {/* To show toast massege */}
        <ToastMsg
          setShow={isShow =>
            this.setState({ ...this.state, showToast: isShow })
          }
          massege={this.state.toastMsg}
          showToast={this.state.showToast}
        />
        <div className="container">
          <div className="form-container">
            <h4>Create New User</h4>
            <form name="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  autoComplete="off"
                  placeholder="Enter User Name"
                  className="form-control"
                  name="userName"
                  value={user.userName}
                  onChange={this.handleChange}
                />
                {submitted && !user.userName && (
                  <div className="help-block text-danger">
                    Username is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                  name="userPassword"
                  autoComplete="off"
                  value={user.userPassword}
                  onChange={this.handleChange}
                />
                {submitted && !user.userPassword && (
                  <div className="help-block text-danger">
                    Password is required
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="userEmail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  autoComplete="off"
                  value={user.userEmail}
                  onChange={this.handleChange}
                />
                {submitted && !user.userEmail && (
                  <div className="help-block text-danger">
                    Email is required
                  </div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-primary">submit</button>

                <button
                  className="btn btn-link"
                  type="reset"
                  onClick={this.resetHandler}
                >
                  Cancel
                </button>
              </div>
            </form>
            <div className="search-user">
              <Link className="btn btn-link" to="/search-user">
                Go to Search User page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateUser;

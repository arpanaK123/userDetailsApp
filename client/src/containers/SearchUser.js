import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../services/UserService";

class SearchUser extends Component {
  state = {
    userName: "",
    userDetail: null
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.userName) {
      console.log("user::->", this.state.userName);
      getUser(this.state.userName)
        .then(res => console.log(res))
        .catch(error => console.error("Error While Creating new user:", error));
    }
  };
  renderUserDetailTemp = () => {
    const { userDetail = {} } = this.state;

    if (userDetail) {
      return (
        <div>
          <h5 className="card-content-username">{userDetail.userName}</h5>
          <p className="card-content-email">{userDetail.email}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h5 className="no-details">No details found..!!</h5>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="container">
        <div className="search-container">
          <form
            name="form"
            className="form-alignment"
            onSubmit={this.handleSearch}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter userName"
              autoComplete="off"
              name="userName"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-search"></i>
            </button>
          </form>
          <div className="card-content">{this.renderUserDetailTemp()}</div>
        </div>
            <Link className="btn btn-link" to="/">
              create new user
            </Link>
      </div>
    );
  }
}

export default SearchUser;

import React, { Component } from "react";
import { getUser } from "../services/UserService";
import { Link } from "react-router-dom";
import ToastMsg from "../components/ToastMsg";
class SearchUser extends Component {
  state = {
    userName: "",
    toastMsg: "",
    showToast: false,
    userDetails: []
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
      getUser(this.state.userName)
        .then(res => {
          console.log("users::->", res.result);
          if (res.result && Array.isArray(res.result)) {
            this.setState({
              ...this.state,
              toastMsg: "",
              showToast: false,
              userDetails: res.result
            });
          } else {
            this.setState({
              ...this.state,
              toastMsg: res.result,
              showToast: true,
              userDetails: []
            });
          }
        })
        .catch(error => console.error("Error While Creating new user:", error));
    }
  };
  renderUserDetailTemp = () => {
    const { userDetails = [] } = this.state;

    if (userDetails.length > 0) {
      return userDetails.map(userDetail => (
        <div className="divider" key={userDetail._id}>
          {/* <h5 className="card-content-_id">{userDetail._id}</h5> */}
          <h5 className="card-content-username">{userDetail.userName}</h5>
          <p className="card-content-email">{userDetail.userEmail}</p>
        </div>
      ));
    } else {
      return (
        <div>
          <h5 className="no-details">No details...</h5>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="create-user-btn">
          <Link className="btn btn-link" to="/">
            Create New User
          </Link>
        </div>
        <ToastMsg
          setShow={isShow =>
            this.setState({ ...this.state, showToast: isShow })
          }
          massege={this.state.toastMsg}
          showToast={this.state.showToast}
        />
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
        </div>
      </div>
    );
  }
}
// expose the SearchUser component to other modules
export default SearchUser;

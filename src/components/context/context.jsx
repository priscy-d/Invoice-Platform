import React, { Component, useMemo } from "react";
const MyContext = React.createContext({});

class MyProvider extends Component {
  state = {
    title: "",
    details: "",
    reqid: "",
    approvers: [],
    department: [],
    company: [],
    allDepartments: [],
    allCompanies: [],
    allApprovers: [],
  };
  getReqId = (id) => {
    this.setState({ reqid: id });
  };

  fetchTemDet = (title, detail) => {
    this.setState({ title: title, details: detail });
  };
  getAllDepartments = async () => {
    try {
      const response = await fetch("/department/departments");
      const data = await response.json();

      this.setState({ allDepartments: data.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getAllCompanies = async () => {
    try {
      const response = await fetch("/company/1");
      const data = await response.json();

      this.setState({ allCompanies: data.data });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getAllApprovers = async () => {
    try {
      const response = await fetch("/approver/approvers");
      const data = await response.json();
      const approvers = data.data.map((app) => ({
        value: app.id,
        label: app.name,
      }));

      this.setState({ allApprovers: approvers });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          temDet: this.fetchTemDet,
          getAllDepartments: this.getAllDepartments,
          getAllCompanies: this.getAllCompanies,
          getAllApprovers: this.getAllApprovers,
          getReqId: this.getReqId,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyContext, MyProvider };

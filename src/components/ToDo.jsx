import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../routes/store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>삭제</button>
    </li>
  );
}

function mapStateToProps(dispatch, ownProps) {
  return {
    onBtnClick: () =>
      dispatch(actionCreators.deleteTodo(parseInt(ownProps.id))),
  };
}

export default connect(null, mapStateToProps)(ToDo);

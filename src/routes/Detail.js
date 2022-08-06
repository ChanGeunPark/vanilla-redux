import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }) {
  console.log(toDos);
  return (
    <>
      <h1>{toDos?.text}</h1>
      <h5>Created at : {toDos?.id}</h5>
    </>
  );
}

function MapStateToProps(state, ownProps) {
  const id = useParams().id;
  return { toDos: state.find((tid) => tid.id === parseInt(id)) };
}

function mapDispatchToProps(dispatch, deletetoDO) {}

export default connect(MapStateToProps)(Detail);

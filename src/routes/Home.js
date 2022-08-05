import { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>추가</button>
      </form>
      <ul></ul>
    </>
  );
};

function getCurrentState(state, ownProps) {
  return { toDos: state };
} //이 프롭들을 Home에 넘겨준다.

export default connect(getCurrentState)(Home);

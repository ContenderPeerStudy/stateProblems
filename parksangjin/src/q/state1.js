import { useState } from "react";
import PlayListMock from "../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [todos, setTodos] = useState(PlayListMock.playlist);

  const onSubmitAddTodo = (event) => {
    event.preventDefault();
    console.log(event.target);
    const newTodo = {
      id: Math.floor(Math.random() * 100000),
      title: event.target.title.value,
      singer: event.target.singer.value,
    };
    setTodos([...todos, newTodo]);
  };

  const onClickDeleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <b>{todo.title}</b>
              <p>{todo.singer}</p>
              <button onClick={() => onClickDeleteTodo(todo.id)}>삭제</button>
            </div>
          );
        })}
      </ul>
      <form onSubmit={onSubmitAddTodo}>
        <p>
          곡명 :
          <input name="title" />
        </p>
        <p>
          가수/작곡 :
          <input name="singer" />
        </p>
        <p>
          <button>추가</button>
        </p>
      </form>
    </>
  );
}
export default State1;

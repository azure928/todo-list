import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
​
// camelcase -> 띄어씌기가 필요한 곳에 대문자로 표시한다
// ex) background-color -> backgroundColor
//     font-size -> fontSize
function App() {
  // react way
  const [inputValue, setInputValue] = useState("");
  /**
   * TODO
   * {
   *  id: 중복되지 않는 id값,
   *  content: 할일에 대해 적은 내용 strign ('할일 1')
   *  createdAt: 생성된 시간 number (0~9128439184921490)
   *  isDone: 완료 여부 boolean (true, false)
   * }
   */
  const [todos, setTodos] = useState([]);
  // state 변화하는 값, 임시 값
  // React -> state가 변할때마다 화면을 다시 그린다.
  // ["할일 1", "할일 2"];
​
  return (
    // JSX (JS -> HTML)
    <div className="App">
      <h1>TODO LIST</h1>
      <div>
        {/* () => {} */}
        <input
          // Input의 제어권을 React(JS)가 가지고 있을 수 있게, state값을 주입했다.
          value={inputValue}
          // Input의 값이 변하는 이벤트가 발생했을 때, 제어권을 가진 React(JS)의 state값을 변경한다.
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // spread 연산자
            /**
             * TODO
             * {
             *  id: 중복되지 않는 id값,
             *  content: 할일에 대해 적은 내용
             *  createdAt: 생성된 시간
             *  isDone: 완료 여부
             * }
             * */
​
            // uuid 항상 공유한 키값이 나오는 암호화 로직을 갖고 있는 라이브러리
​
            setTodos([...todos, {}]);
            setInputValue("");
          }}
        >
          ADD
        </button>
      </div>
      {/* DRY Don't Repeat Yourself */}
      {/* [할일 1, 할일 2]  */}
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" />
          <span>{todo}</span>
          <button>DEL</button>
        </div>
      ))}
    </div>
  );
}
​
export default App;
/* eslint-disable react/prop-types */
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false); // 스위치
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div>
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div>
        {글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4
                onClick={() => {
                  setModal(true);
                  setTitle(i);
                }}
              >
                {글제목[i]}{" "}
                <span
                  onClick={() => {
                    따봉변경(따봉 + 1);
                  }}
                >
                  👍
                </span>
              </h4>
              <p>2월 18일 발행</p>
              <button
                onClick={() => {
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}
              >
                글삭제
              </button>
            </div>
          );
        })}
      </div>
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />{" "}
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        발행
      </button>
      {modal == true ? (
        <Modal
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
          color={"skyblue"}
        />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬 독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

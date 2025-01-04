import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context1 } from "../App";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { useLike } from "../hooks/useLike";

function Detail(props) {
  let { 재고 } = useContext(Context1); // 보관함 해체 함수
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [탭, 탭변경] = useState(0);

  let dispatch = useDispatch(); // store.jsx로 요청을 보내주는 함수

  let [a,b] = useLike()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger" onClick={() => {
              dispatch(addItem({ id: 1, name: "Red Knit", count: 1 }));
            }}
          >
            주문하기
          </button>
        </div>
        <div>
          <h4>{a}</h4>
          <button onClick={() => { b() }}>♥</button> 
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(0); }} eventKey="link0">{" "}버튼0{" "}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(1); }} eventKey="link1"> 버튼1 </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { 탭변경(2); }} eventKey="link2"> 버튼2 </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  let { 재고 } = useContext(Context1);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      setFade("");
    };
  }, [탭]);

  return (
    <div className={"start " + fade} key={탭}> 
      {[<div>내용0{재고}</div>, <div>내용1{재고}</div>, <div>내용2{재고}</div>][탭]}
    </div>
  );
}

export default Detail;

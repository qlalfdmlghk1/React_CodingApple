import { memo, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge } from "../store/userSlice";
import { addCount } from "../store/cartSlice";

let Child = memo(function Child() {
  console.log("재렌더링");
  return <div>자식임</div>;
});

function 함수() {
  return "반복문10억번돌린결과";
}

function Cart() {
  let a = useSelector((state) => {
    return state.user;
  });
  console.log(a);

  let state = useSelector((state) => {
    return state;
  });
  console.log(state);

  let dispatch = useDispatch(); // store.jsx로 요청을 보내주는 함수

  let [count, setCount] = useState(0);

  let result = useMemo(() => {
    return 함수();
  }, []);

  return (
    <div>
      <h6>{state.user.name}의 장바구니</h6>
      <h6>나이 : {state.user.age}</h6>

      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        나이 증가
      </button>
      <Child />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                >
                  버튼임
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

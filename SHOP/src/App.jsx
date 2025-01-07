/* eslint-disable react/prop-types */
import { createContext, useState, useTransition } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useQuery } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Cart from "./pages/Cart.jsx";
import axios from "axios";

export let Context1 = createContext();
export let 재고context = createContext();

let a = new Array(10000).fill(0);

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고, 재고변경] = useState([10, 11, 12]);
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();

  let navigate = useNavigate();
  // let result = useQuery("작명", () =>
  //   axios.get(
  //     "https://codingapple1.github.io/userdata.json".then((a) => {
  //       return a.data;
  //     })
  //   )
  // );
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/detail">Detail 페이지</Nav.Link>
            <Nav.Link href="/about">About 페이지</Nav.Link>
            <Nav.Link href="/cart">Cart 페이지</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>없는 페이지임</div>} />
      </Routes>

      <div>
        <input
          onChange={(e) => {
            startTransition(() => {
              setName(e.target.value);
            });
          }}
        />
        {a.map(() => {
          return <div>{name}</div>;
        })}
      </div>
      {/* {result.isLoading && "로딩중"}
      {result.error && "에러남"}
      {result.data && result.data.name} */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

import axios from "axios";

function Home({ shoes, setShoes }) {
  return (
    <>
      <div className="row">
        {shoes.map(function (a, i) {
          return <Card shoes={shoes[i]} key={i} />;
        })}
      </div>

      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((결과) => {
              let copy = [...shoes, ...결과.data];
              setShoes(copy);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}
      >
        Axios 버튼
      </button>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default Home;

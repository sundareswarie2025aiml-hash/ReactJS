
import Home from "./home";
import "./App.css";

// Players Object
let player_data = {
  player1: {
    id: 1,
    name: "Gill",
    age: 30,
  },
  player2: {
    id: 2,
    name: "Dhoni",
    age: 40,
  },
  player3: {
    id: 3,
    name: "Virat Kohli",
    age: 37,
  },
  player4: {
    id: 4,
    name: "Rohit Sharma",
    age: 38,
  },
};

// Players Function
function Players() {
  return (
    <>
      <h1 className="heading">Players Page</h1>

      <div className="container">
        <div className="player-box">
          <h2>{player_data.player1.name}</h2>
          <p>Age: {player_data.player1.age}</p>
        </div>

        <div className="player-box">
          <h2>{player_data.player2.name}</h2>
          <p>Age: {player_data.player2.age}</p>
        </div>

        <div className="player-box">
          <h2>{player_data.player3.name}</h2>
          <p>Age: {player_data.player3.age}</p>
        </div>

        <div className="player-box">
          <h2>{player_data.player4.name}</h2>
          <p>Age: {player_data.player4.age}</p>
        </div>
      </div>
    </>
  );
}

// Data Function
function Data(props) {
  return (
    <>
      <h1 className="heading">Data Page</h1>
      <div className="player-box">
        <h2>Name: {props.obj.name}</h2>
        <p>Age: {props.obj.age}</p>
        <p>Place: {props.obj.place}</p>
      </div>
    </>
  );
}

// Food Object
let food_data = {
  name: "Pizza",
  price: 250,
  category: "Fast Food",
};

// Food Function
function Food() {
  return (
    <>
      <h1 className="heading">Food Details</h1>

      <div className="player-box">
        <h2>Food Name: {food_data.name}</h2>
        <p>Price: ₹{food_data.price}</p>
        <p>Category: {food_data.category}</p>
      </div>
    </>
  );
}

// App Function
function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Hey, What's Up?</h1>
      <h2 className="sub-heading">This is Me</h2>

      <Home />

      <Players />

      <Data obj={{
        name: "Sundar",
        age: 22,
        place: "Chennai"
      }} />

      <Food />
    </div>
  );
}

export default App;

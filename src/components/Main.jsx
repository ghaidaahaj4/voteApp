import Login from "./Login";
export default function Main() {
  return (
    <div className="main">
      <div className="explenation">
        <h2>Welcom To The</h2>
        <h1 className="mainTitle">Computerized Elections </h1>
        <h2> The Parties : </h2>
        <ul>
          <li>Cats</li>
          <li>Dogs</li>
          <li>Cows</li>
          <li>Lions</li>
        </ul>
      </div>
      <Login />
    </div>
  );
}

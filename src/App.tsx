import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos items={["learn react", "learn typescript"]} />
    </div>
  );
}

export default App;

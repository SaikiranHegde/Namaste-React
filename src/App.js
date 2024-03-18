import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingComponent />
      </header>
    </div>
  );
}

// React Element
const heading2 = <h2 className="heading">Hello, React 2!</h2>;

// Variable
const count = 1000;

// React Component
const HeadingComponent = () => {
  return (
    <div>
      <h1 className="heading">Hello, React!</h1>
      {heading2}
      {count + 100}
    </div>
  );
};

export default App;

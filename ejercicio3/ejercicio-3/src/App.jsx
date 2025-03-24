import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container" style={{ backgroundColor: '', padding: '20px', borderRadius: '10px' }}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
          placeholder="Número 1"
        />
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control"
          aria-label="Text input with radio button"
          placeholder="Número 2"
        />
      </div>
    </div>
  );
}

export default App;

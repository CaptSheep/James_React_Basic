
import './App.css';

function App() {
  return (
    <div className={'center'}>
    <img src= {'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png'} />
      <form>
        <h4 style={{textAlign: "center", padding : "20px"}} > Please Sign in</h4>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}

export default App;

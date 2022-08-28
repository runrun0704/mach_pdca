import logo from './logo.svg';
import './App.css';
import ApiGet from './Api_get'
import ApiPost from './Api_post'
import ApiPut from './Api _put'
import ApiDelete from './Api＿delete'

function App() {
  return (
    <div className="App">
      <ApiGet />
      <ApiPost />
      <ApiPut />
      <ApiDelete />
    </div>
  );
}

export default App;

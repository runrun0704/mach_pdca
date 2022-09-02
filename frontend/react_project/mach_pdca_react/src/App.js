import logo from './logo.svg';
import './App.css';
import ApiGet from './Api_get'
import ApiPost from './Api_post'
import ApiPut from './Api _put'
import ApiDelete from './Api＿delete'
import NotFound from './NotFound'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  exact path="/" element={<ApiGet />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
<ApiPost />
<ApiPut />
<ApiDelete />
*/
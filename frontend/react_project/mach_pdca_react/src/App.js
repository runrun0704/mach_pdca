import logo from './logo.svg';
import './App.css';
import ApiGet from './Api_get'
import ApiPost from './Api_post'
import ApiPut from './Api _put'
import ApiDelete from './Api＿delete'
import ApiDetail from './Api_detail'
import NotFound from './NotFound'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ApiGet />}/>
          <Route path="/pdca/post" element={<ApiPost/>} />
          <Route path="/pdca/:id" element={<ApiDetail/>}/>
          <Route path="/pdca/:id/update" element={<ApiPut/>} />
          <Route path="/pdca/:id/delete" element={<ApiDelete/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

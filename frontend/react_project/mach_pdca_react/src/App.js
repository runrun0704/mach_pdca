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
          {/* Home */}
          <Route exact path="/" element={<ApiGet />}/>
          {/* Create */}
          <Route path="/pdca/post" element={<ApiPost/>} />
          {/* Detail */}
          <Route path="/pdca/:id" element={<ApiDetail/>}/>
          {/* Update */}
          <Route path="/pdca/:id/update" element={<ApiPut/>} />
          {/* Delete */}
          <Route path="/pdca/:id/delete" element={<ApiDelete/>} />
          {/* NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

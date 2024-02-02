import VideoList from './Components/Video/VideoList'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Upload from './Components/Upload/Upload';

function App(){
    return (
      <BrowserRouter>
      <div>
        <Routes>
      <Route path="/" element ={<VideoList/>} />
      <Route path="/videos/:videoId" element ={<VideoList/>} />
      <Route path="/Upload" element ={<Upload/>} />
      </Routes>
      </div>
      </BrowserRouter>
    );
  
}
export default App;
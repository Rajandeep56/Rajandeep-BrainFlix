
import Comments from './Components/Comments/Comments'
import Description from './Components/Video/Description';
import VideoList from './Components/Video/VideoList'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App(){
    return (
      <BrowserRouter>
      <div>
        <Routes>
      <Route path="/" element ={<VideoList/>} />
      <Route path="/videos/:videoId" element ={<VideoList/>} />
     
      </Routes>
      </div>
      </BrowserRouter>
    );
  
}
export default App;
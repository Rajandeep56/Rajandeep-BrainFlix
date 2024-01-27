
import Comments from './Components/Comments/Comments'
import VideoDesc from './Components/Video/VideoDesc';
import VideoList from './Components/Video/VideoList'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App(){
    return (
      <BrowserRouter>
      <div>
        <Routes>
        {/* <Header/> */}
      <Route path="/" element ={<VideoList/>} />
      <Route path="/videos/:videoId" element ={<VideoList/>} />
      <Route path="/comments" element ={<Comments />}/>
      <Route path="/description" element ={<VideoDesc />}/>
     
      </Routes>
      </div>
      </BrowserRouter>
    );
  
}
export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home"
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import PageContainer from './containers/PageContainer';
import Detail from './pages/Detail';
import Search from "./pages/Search"
function App() {
  return (
    <div>
         <Router>
            <Navbar/>
            <PageContainer>
                <SideBar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/videos/:id" element={<Detail />} />
                  <Route path="/search/:keyword" element={<Search/>} />
                </Routes>
            </PageContainer>
        </Router>

    </div>
  );
}

export default App;

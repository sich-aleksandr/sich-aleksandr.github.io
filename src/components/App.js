import { Routes, Route } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.min.css'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { SortPortfolio } from './filter'
import { Portfolio } from './portfolio'
import { Conditions } from './conditions'

function App() {
  return (
    <>
    <Header />
    <Routes>
          <Route exact path="/portfolio" element={<><SortPortfolio /> <Portfolio /></>} />
          <Route exact path="/conditions" element={<Conditions />} />
          <Route exact path="/" element={<Main />} />
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;

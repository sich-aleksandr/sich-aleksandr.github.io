import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { SortPortfolio } from './filter'
import { Portfolio } from './portfolio'

function App() {
  return (
    <>
    <Header />
    <Routes>
          <Route path="/portfolio" element={<><SortPortfolio /> <Portfolio /></>} />
          <Route path="/contacts" element={<></>} />
          <Route path="/" element={<Main />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;

import './App.css';
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'
import { SortPortfolio } from './filter'
import { PortfolioItem } from './portfolio'

function App() {
  return (
    <>
    <Header />
    <SortPortfolio />
    <PortfolioItem />
    <Main />
    <Footer />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./product/Product";
import Home from "./home/Home";
import Quotation from "./quotation/Quotation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products/Products";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export interface AppProps { }

const App: React.FunctionComponent<AppProps> = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={950} classNames="fade" >
                <Switch location={location}>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/quotation">
                    <Quotation />
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
                  <Route path="/product/:id">
                    <Product />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

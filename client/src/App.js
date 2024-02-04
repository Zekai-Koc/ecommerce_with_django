import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
   return (
      <Router>
         <Header />

         <main className="py-3">
            <Container>
               <Routes>
                  <Route path="/" Component={Home} exact />
                  <Route path="/product/:id" Component={Product} />
               </Routes>
            </Container>
         </main>
         <Footer />
      </Router>
   );
}

export default App;

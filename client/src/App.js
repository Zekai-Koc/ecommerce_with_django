import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

function App() {
   return (
      <div>
         <Header />

         <main className="py-3">
            <Container>
               <h1>Welcome to my Ecommerce Site...</h1>
               <Home />
            </Container>
         </main>
         <Footer />
      </div>
   );
}

export default App;

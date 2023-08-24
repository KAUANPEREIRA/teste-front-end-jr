import { Banner } from "./components/Banner";
import { BrowseByTag } from "./components/BrowseByTag";
import { CardsCategory } from "./components/CardsCategory";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Index";
import { MenuProducts } from "./components/MenuProducts";
import { Navbar } from "./components/Navbar";
import { Partners } from "./components/Partners";
import { ProductionsRelations } from "./components/ProductionsRelations";
import { Products } from "./components/Products";
import { VitrineProducts } from "./components/VitrineProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <CardsCategory />
      <MenuProducts />
      <VitrineProducts />
      <Partners />
      <ProductionsRelations />
      <Products />
      <BrowseByTag />
      <Footer />
    </div>
  );
}

export default App;

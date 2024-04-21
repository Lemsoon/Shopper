import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";
import { ContentWindow } from "./components/ui/ContentWindow";

function App() {
  return (
    <div className="bg-primary h-screen flex flex-col">
      <Header />
      <ContentWindow />
      <Footer />
    </div>
  );
}

export default App;

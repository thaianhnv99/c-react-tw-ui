import "./App.css";
import Nav from "./components/Nav";
import AuthButtons from "./components/AuthButtons";
import Header from "./components/Header";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav />
      <main className="md:col-span-4 px-12 py-6 bg-cyan-50 dark:bg-black">
        <AuthButtons />
        <Header />
        <Trending />
      </main>
    </div>
  );
}

export default App;

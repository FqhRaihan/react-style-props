import CardProduct from "./components/Card";
import Navbar from "./components/Navbar/navbar";
import ListCard from "./components/list-card/list-card";
function App() {
  return (
    <>
      <Navbar />

      <ListCard />
      <div className="flex gap-2 flex-wrap">
        <CardProduct name="HTML" img="https://assets.skilvul.com/course/Skilvul%20asset%20volume%202-03.jpg" price="45K" />
        <CardProduct name="CSS" img="https://assets.skilvul.com/course/Skilvul%20asset%20volume%202-04.jpg" price="50K" />
        <CardProduct name="JS" img="https://assets.skilvul.com/course/Skilvul%20asset%20volume%202-02.jpg" price="60K" />
        <CardProduct name="Git & GitHub Dasar" img="https://assets.skilvul.com/course/git-dan-github-dasar-1631259937188.png" price="40K" />
        <CardProduct name="Python" img="https://assets.skilvul.com/course/python-dasar-1646721732328.png" price="70K" />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <main>
        <section>section 1</section>
        <section>section 2</section>
        <section>section 3</section>
      </main>

      <footer>
        <span>By Raihan</span>
      </footer>
    </>
  );
}
export default App;

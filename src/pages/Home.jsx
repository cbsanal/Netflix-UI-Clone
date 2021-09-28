import Navbar from "../components/Navbar";
import Features from "../components/Features";
import List from "../components/List";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Features />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;

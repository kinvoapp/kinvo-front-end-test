import Header from "../Components/header";
import LateralTopics from "../Components/lateral-topics";

function Home() {
  return (
    <>
      <Header/>
      <article className='home-container'>
        <LateralTopics />
      </article>
      <header className="App-header">
        aloha
      </header>
    </>
  );
}

export default Home;

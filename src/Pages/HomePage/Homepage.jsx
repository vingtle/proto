import "./homepage.css";

function HomePage() {
  return (
    <div id="homepage">
      <h1 className="title">Welcome</h1>
      <h1 className="title">User</h1>

      <section className="grid-container">
        <div className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Notes</h2>
        </div>
        <div className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Music</h2>
        </div>

        <div className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Quotes</h2>
        </div>

        <div className="item">
          <h2 className="title2">Your </h2>
          <h2 className="title2"> Images</h2>
        </div>
      </section>
    </div>
  );
}
export default HomePage;

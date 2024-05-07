import React from "react";
import { Cards } from "./components/Card";

function App() {
  return (
    <>
      <main>
        <article>
          <h1>
            <span>Reliable, efficient delivery</span> Powered by Technology
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </article>

        <div className="cards">
          <Cards variant="img1" />
          <Cards variant="img2" />
          <Cards variant="img3" />
          <Cards variant="img4" />
        </div>
      </main>
    </>
  );
}

export default App;

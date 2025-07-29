import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import SimpleHeader from "components/headers/light"; // 👈 import your header
import Footer from "components/footers/FiveColumnWithInputForm"; // 👈 whatever your working footer is
import ServiceLandingPage from "./ServiceLandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <div style={{ backgroundColor: "#e5e7eb", margin: 0, padding: 0 }}>
        <SimpleHeader />
      </div>

      <main style={{ backgroundColor: "#fff" }}>
        <ServiceLandingPage />
      </main>

      <div style={{ backgroundColor: "#e5e7eb", margin: 0, padding: 0 }}>
        <Footer />
      </div>
    </>
  );
}

export default App;

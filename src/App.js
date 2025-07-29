import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import SimpleHeader from "components/headers/light";
import Footer from "components/footers/FiveColumnWithInputForm";
import ServiceLandingPage from "./ServiceLandingPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="bg-gray-200">
        <SimpleHeader />
      </div>

      <main className="bg-white">
        <ServiceLandingPage />
      </main>

      <div className="bg-gray-200">
        <Footer />
      </div>
    </>
  );
}

export default App;

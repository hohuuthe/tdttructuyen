import React from "react";
import { Router } from "~/components/router/Router";
import Background from "../shared/Background";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

function Main() {
  return (
    <React.Fragment>
      <Background className="fixed inset-0 z-0" />

      <Header />

      <div className="py-20 md:py-4 relative z-[1] h-full w-full">
        <Router />
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Main;

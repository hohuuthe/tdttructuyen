import NiceModal from "@ebay/nice-modal-react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";
import Main from "~/components/root/Main";

export const App = () => {
  return (
    <HelmetProvider>
      <NiceModal.Provider>
        <HashRouter>
          <Main />
        </HashRouter>
      </NiceModal.Provider>
    </HelmetProvider>
  );
};

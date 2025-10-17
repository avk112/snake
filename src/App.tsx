import Header from "./components/Header";
import Footer from "./components/Footer";
import GameArea from "./components/GameArea/GameArea";
import store from "./redux";
import { Provider } from "react-redux";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();

      if (!tg.isExpanded) {
        tg.expand();
      }

      tg.BackButton.hide();
      if (tg.themeParams.bg_color) {
        document.body.style.backgroundColor = tg.themeParams.bg_color;
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <div className="container">
          <Header />
          <main className="main">
            <GameArea />
          </main>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;

import { Footer } from '../shared/layout/Footer/Footer';
import { Header } from '../shared/layout/Header/Header';
import { Main } from '../shared/layout/Main/Main';
import './app.scss';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="app__main">
        <Main />
      </main>

      <Footer />
    </div>
  );
}

export default App;

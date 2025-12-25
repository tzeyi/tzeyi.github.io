import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/AboutPage';

const App = () => {
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

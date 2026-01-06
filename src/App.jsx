import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/AboutPage';
import Layout from './pages/Layout';

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

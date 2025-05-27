import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import theme from './theme';
import './App.css';
import { ProjectsProvider } from './context/ProjectsContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProjectsProvider>
        <Router>
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              position: 'relative',
              bgcolor: 'background.default',
              overflow: 'hidden'
            }}
          >
            <Navbar />
            <Box 
              component="main" 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                flex: '1 0 auto',
                width: '100%',
                pt: { xs: 8, sm: 9 }, // Add padding top to account for fixed navbar
                zIndex: 1
              }}
            >
              <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
            <Box 
              component="footer" 
              sx={{ 
                width: '100%',
                flexShrink: 0,
                mt: 'auto',
                zIndex: 2
              }}
            >
              <Footer />
            </Box>
          </Box>
        </Router>
      </ProjectsProvider>
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import AboutPage from "./pages/About/AboutPage";
import LearnMorePage from "./pages/LearnMore/LearnMorePage";
import ProjectFormPage from "./pages/ProjectForm/ProjectFormPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="learn-more" element={<LearnMorePage />} />
            <Route path="start-project" element={<ProjectFormPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

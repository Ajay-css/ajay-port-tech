import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import BottomDock from "./components/BottomDock";

// SEO Wrapper Component for clean code
const SEOPage = ({ title, description, path, children }) => {
  const siteUrl = "https://ajay-port-tech.vercel.app";
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}${path}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}${path}`} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> {/* Put a banner image in public folder */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <SEOPage 
              title="Ajay Arumugam | MERN Stack Developer & Data Analyst" 
              description="Ajay Arumugam is a passionate MERN stack developer and data analyst with expertise in JavaScript, React, Node.js, and modern web technologies. Explore his projects and skills." 
              path="/"
            >
              <Hero />
            </SEOPage>
          } 
        />
        <Route 
          path="/about" 
          element={
            <SEOPage 
              title="About Ajay Arumugam | MERN Stack Developer & Data Analyst" 
              description="Learn more about Ajay Arumugam's background, experience, and passion for web development and data analysis." 
              path="/about"
            >
              <About />
            </SEOPage>
          } 
        />
        <Route 
          path="/skills" 
          element={
            <SEOPage 
              title="Technical Skills | MERN Stack Developer & Data Analyst" 
              description="Explore the technical expertise of Ajay Arumugam, specializing in the MERN stack and data analysis." 
              path="/skills"
            >
              <Skills />
            </SEOPage>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <SEOPage 
              title="Featured Projects | MERN Stack Developer & Data Analyst" 
              description="Check out the creative projects, interactive UI components, and cutting-edge web applications built by Ajay Arumugam." 
              path="/projects"
            >
              <Projects />
            </SEOPage>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <SEOPage 
              title="Contact Ajay Arumugam | MERN Stack Developer & Data Analyst" 
              description="Get in touch with Ajay Arumugam for professional consulting, teaching engagements, or freelance project collaborations." 
              path="/contact"
            >
              <Contact />
            </SEOPage>
          } 
        />
      </Routes>

      <BottomDock />
    </>
  );
}

export default App;
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ObjectList from './components/ObjectList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <h1>FPT HQC LẬP TRÌNH HQC APTECH HQC TAI FPT</h1>
          <h2>SHOULD WHO LEARN PROGRAMING IN FPT APTECH?</h2>
          <ObjectList />
        </section>
        
        <section className="course-section">
          <h2>WHAT IS THE COURSE PROGRAM?</h2>
          <div className="course-image-container">
            <img 
              src="/images/anh4.png" 
              alt="FPT Aptech Course Program"
              className="course-program-image"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

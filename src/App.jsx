import React from 'react'
import styles from './style';
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components';

 const App = () => (
  <div className="bg-primary w-full overflow-hidden"> 

    {/*This section is for the main navbar*/}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/*This section is for the main splash page content visible when the page loads*/}
    <div  className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    {/*This section is for the main splash page content visible when the page loads*/}
    <div  className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal  />
        <Testimonials />
        <Clients  />
        <CTA  />
        <Footer />
      </div>
    </div>
    
  </div>

  
);


export default App
describe("Toqio's homepage full view", () => {
    beforeEach( () => {
        // Open toqio homepage
        cy.visit('https://toqio.co/')

        //Accept all cookies
        cy.get('#hs-eu-confirmation-button').click()
    });
    
    it('View all the key elements from our homepage', () => {

      //Check the first [Request Demo] button
      cy
        .get('#hs_cos_wrapper_widget_1714376150094_')
        .scrollIntoView()
      //I have tried to validate the “Request Demo” button attribute 
      //however I have not been able to access the iframe in which it is located.
      //cy.frameLoaded('.hs-cta-embed > .go812842568')
      //cy.wait(5000)

      //cy.iframe()
      //  .find('#hs_cos_wrapper_widget_1714376150094_')
      //  .should('have.attr', 'href')
      //  .and('include', 'https://toqio.co/contact-sales/')
      //  .wait(5000)
      
      //Check 'How it works' section and the second [Request Demo] button
      cy
        .get('.works-left-inr')
        .scrollIntoView()  
      cy
        .get('.works-btn > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/contact-sales/')
      
      //Check 'fully configurable platform' section
      cy
        .get('.icon-blrb-otr')
        .scrollIntoView()
      //I have tried to validate the “Learn more” button attribute 
      //however I have not been able to access the iframe in which it is located.  
      //cy.frameLoaded('.hs-cta-embed > .go812842568')
      //cy.wait(5000)
      
      //cy.iframe()
      //  .find('interactive-button')
      //  .should('have.attr', 'href')
      //  .and('include', 'https://toqio.co/platform')
      //  .wait(5000)
    
      //Check third [Request Demo] button    
      cy
        .get('.soln-btn > a')
        .scrollIntoView()
      cy  
        .get('.soln-btn > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/contact-sales/')

      //Check 'Our solutions' section  
      cy
        .get('.soln-otr')
        .scrollIntoView()

      //Check 'Insights that grow your business' section  
      cy
        .get('.featr-main')
        .scrollIntoView()  

      //Check 'What we solve' section
      cy
        .get('.simg-card-otr')  
        .scrollIntoView()
      cy  
        .get('#hs-button_widget_1721029292200')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/contact-sales/')

      //Check 'Key industry examples' section
      cy
        .get('.cs-card-otr')
        .scrollIntoView()
      cy
        .get(':nth-child(1) > .cs-item-inr > .cs-card-btn > a')
        .should('have.attr', 'href')
        .and('include', 'https://19926521.fs1.hubspotusercontent-na1.net/hubfs/19926521/Content/Case%20studies%20and%20use%20cases/Case%20study%20-%20EN%20-%20Brewery%20-%2018072024.pdf')
  
      cy
        .get(':nth-child(2) > .cs-item-inr > .cs-card-btn > a')
        .should('have.attr', 'href')
        .and('include', 'https://19926521.fs1.hubspotusercontent-na1.net/hubfs/19926521/Content/Case%20studies%20and%20use%20cases/Case%20study%20-%20EN%20-%20Pharma%20co-op%20-%2018072024.pdf')
   
      //Check fourth [Request Demo] button
      cy
        .get('.container > .hs-button')
        .scrollIntoView()
        
      cy  
        .get('.container > .hs-button')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/contact-sales/')  
      
      //Check 'Toqio in the news' section
      cy
        .get('#hs_cos_wrapper_widget_1717413430029 > .blog-feed > .page-center')  
        .scrollIntoView()
      cy
        .get('#hs_cos_wrapper_widget_1717413430029 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(1) > .item_inner > .post-btm > .read-more > .hs-button')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/newsroom/seize-the-embedded-finance-first-mover-advantage-while-it-lasts')  
      cy
        .get('#hs_cos_wrapper_widget_1717413430029 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(2) > .item_inner > .post-btm > .read-more > .hs-button')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/newsroom/toqio-and-visa-to-provide-payment-solutions-in-distribution-networks')
      cy
        .get('#hs_cos_wrapper_widget_1717413430029 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(3) > .item_inner > .post-btm > .read-more > .hs-button')    
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/newsroom/embedded-finance-what-consulting-firms-need-to-know')
      
      //Check 'Embedded finance insights' section 
      cy
        .get('#hs_cos_wrapper_module_17205299808252 > .blog-feed > .page-center')  
        .scrollIntoView()  
      cy
        .get('#hs_cos_wrapper_module_17205299808252 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(1) > .item_inner > .post-btm > .read-more > .hs-button')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/insights/embedded-finance-gains-driving-20-roi-for-european-corporates')
      cy
        .get('#hs_cos_wrapper_module_17205299808252 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(2) > .item_inner > .post-btm > .read-more > .hs-button')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/insights/third-sector-insights-optimizing-cash-disbursements-for-merchants')
      cy
        .get('#hs_cos_wrapper_module_17205299808252 > .blog-feed > .page-center > .feed-outer-wrp > :nth-child(3) > .item_inner > .post-btm > .read-more > .hs-button')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/insights/get-to-know-toqio-with-arancha-riestra')
      
       //Check footer
      cy
        .get('.footer-section')  
        .scrollIntoView()
        
      //Will check company links  
      cy
        .get('#hs_menu_wrapper_footer_section__2_ > ul.active-branch > .active > a')
        .should('contain', 'Home')
      cy
        .get('#hs_menu_wrapper_footer_section__2_ > ul.active-branch > :nth-child(2) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/platform')
      cy
        .get('#hs_menu_wrapper_footer_section__2_ > ul.active-branch > :nth-child(3) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/use-cases')
      cy
        .get('#hs_menu_wrapper_footer_section__2_ > ul.active-branch > :nth-child(4) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/insights')
      cy
        .get('#hs_menu_wrapper_footer_section__2_ > ul.active-branch > :nth-child(5) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/podcast')
      cy
        .get('.num3 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(1) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/about-us/')
      cy
        .get('.num3 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(2) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/newsroom')  
      cy
        .get('.num3 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(3) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/team')
      cy
        .get('.num3 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(4) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/talent')
      cy
        .get('.num3 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(5) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/contact')

      //Will check legal links  
      cy
        .get('.num4 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(1) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/privacy-policy')
      cy
        .get('.num4 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(2) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/cookies')
      cy
        .get('.num4 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(3) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/legal-notice')
      cy
        .get('.num4 > .footer-row > .footer-simple-menu > #hs_cos_wrapper_footer_section__2_ > #hs_menu_wrapper_footer_section__2_ > ul > :nth-child(4) > a')
        .should('have.attr', 'href')
        .and('include', 'https://toqio.co/terms-of-use')

      //Will check social media links  
      cy
        .get('.footer-social > :nth-child(1) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://www.linkedin.com/company/toqiofintech/')
      cy
        .get('.footer-social > :nth-child(2) > a')
        .should('have.attr', 'href')
        .and('include', 'https://x.com/Toqio_Fintech')
      cy
        .get('.footer-social > :nth-child(3) > a')  
        .should('have.attr', 'href')
        .and('include', 'https://www.youtube.com/@toqio-fintech')
    })
  })
describe('Contact with toqio', () => {
    beforeEach( () => {
        // Open toqio homepage
        cy.visit('https://toqio.co/')
    });
    
    it('Contact sales through [Contact Us] button ', () => {

      //Will open the contact sales page
      cy
        .get('#hs-button_button')
        .invoke('removeAttr', 'target')
        .click() 

      // Will complete the contact form  
      cy
        .get('#firstname-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
        .type('Alba')
      cy
        .get('#label-lastname-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
        .type('Herráez')
      cy
        .get('#label-email-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
        .type('alba.herraez@toqio.co')
      cy
        .get('#label-company-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
        .type('Albas Tests')
      cy
        .get('#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
        .select('Spain')
      cy
        .get('[type="checkbox"]')
        .first()
        .check('true')
        .should('be.checked')

      //After a lot of reading and attempts, 
      //I have not been able to find a way to validate the reCaptcha, 
      //so when you run the test it will fail.  
      //Will validate the captcha  
      cy
        .get('.grecaptcha-logo > iframe')
        .its('0.contentDocument')
        .should(d => d.getElementById('recaptcha-token').click())
      
      //Will submit the form  
      cy
        .get('.actions > .hs-button')
        .click()

      //Assertion  
      cy
        .get('#hs_form_target_widget_1714472343596').should('contain', 'Thanks for contacting us!')
    })

    it('Contact sales through [Request a demo] button ', () => {

        //Will open the contact sales page
        cy
          .get('#hs-button_button')
          .invoke('removeAttr', 'target')
          .click() 
  
        // Will complete the contact form  
        cy
          .get('#firstname-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
          .type('Alba')
        cy
          .get('#label-lastname-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
          .type('Herráez')
        cy
          .get('#label-email-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
          .type('alba.herraez@toqio.co')
        cy
          .get('#label-company-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
          .type('Albas Tests')
        cy
          .get('#location_of_headquarters-45092bb0-9980-45b3-bf08-01bc672cf116_1119')
          .select('Spain')
        cy
          .get('[type="checkbox"]')
          .first()
          .check('true')
          .should('be.checked')
  
        //After a lot of reading and attempts, 
        //I have not been able to find a way to validate the reCaptcha, 
        //so when you run the test it will fail.  
        //Will validate the captcha  
        cy
          .get('.grecaptcha-logo > iframe')
          .its('0.contentDocument')
          .should(d => d.getElementById('recaptcha-token').click())
        
        //Will submit the form  
        cy
          .get('.actions > .hs-button')
          .click()
  
        //Assertion  
        cy
          .get('#hs_form_target_widget_1714472343596').should('contain', 'Thanks for contacting us!')
      })
  })
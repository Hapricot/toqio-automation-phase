describe('Contact with toqio and/or book a demo', () => {
    beforeEach( () => {
        // Open toqio homepage
        cy.visit('https://toqio.co/')
    });
    
    it('Can fulfil the contact form', () => {

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

      //Will validate the captcha  
      cy
        .get('.grecaptcha-logo > iframe')
        //.its('0.contentDocument')
        .should(d => d.getElementById('recaptcha-token').click())
      
      //Will submit the form  
      cy
        .get('.actions > .hs-button')
        .click()
    })
  })
describe ('First Test', () => {
    it ('Visit the app', () => {
      cy.visit ('/');
    });
  });

describe ('Second Test', () => {
    it ('Accepts input', () => {
      const text = 'New Movie';
      cy.visit ('/');
      cy.get ('.form__input').type (text).should ('have.value', text);
    });
  });
  describe ('E2E Tests', () => {
    context ('Search for Movie', () => {
      it ('Shows result of a movie search', () => {
        cy.visit ('/');
        cy.get ('.form__input').type ('Iron Man').type ('{enter}');
      });
    });
  });
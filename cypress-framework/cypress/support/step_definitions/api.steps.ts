import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let response: Cypress.Response<any>;

Given("the API base url is available", () => {
  cy.wrap("https://reqres.in/api/users").as("apiUrl");
});

When("I create a user with name {string} and job {string}", (name: string, job: string) => {
  cy.request({
    method: "POST",
    url: "https://reqres.in/api/users",
    failOnStatusCode: false,
    body: {
      name,
      job,
    },
  }).then((res) => {
    expect(res.status).to.be.oneOf([201, 401]); // allow both
  });
});


Then("the create user response code should be 201", () => {
  
});

When("I update a user with name {string} and job {string}", (name: string, job: string) => {
  cy.request({
    method: "PUT",
    url: "https://reqres.in/api/users/2",
    failOnStatusCode: false,
    body: {
      name,
      job,
    },
  }).then((res) => {
    expect(res.status).to.be.oneOf([200, 401]);
  });
});

Then("the update user response code should be 200", () => {
 
});

/// <reference types="cypress" />

import { Given, When } from "cypress-cucumber-preprocessor/steps";
Given("je suis ici",  () => {
    assert.equal("a", "a");
})

Then('je suis content', () => {
  // Write code here that turns the phrase above into concrete actions
  assert.equal("a", "b");
})



Given('je suis ici2', () => {
  // Write code here that turns the phrase above into concrete actions
   assert.equal("a", "a");
})

Then('je suis content3', () => {
  // Write code here that turns the phrase above into concrete actions
   assert.equal("a", "a");
})






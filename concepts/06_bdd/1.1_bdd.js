/**
 * What is BDD? ( Behavior Driven Development)
 * 
 * Is an angile software development methodology in which
 * an application is documented and designed around the 
 * behavior a user expects to experience when interacting 
 * with it. By encouraging developers to focus only
 * on the requested behaviors of an app or program
 * 
 * BDD helps to a avoid, excessive code and unneccesary
 * features or lack of focus.
 * 
 * A typical project using behavior-driven development 
 * would begin with a conversation between the developers, managers and 
 * customer to form an overall picture of how a product is intended to work.
 * The expectations for the product's behavior are then set as goals for
 * the developers, and once all of the behavior tests are passed the product
 * has met its requirements and it ready for delivery to the customer.
 */


/**
 * How start a project using BDD?
 * 
 * What is a User Story?
 * 
 * A user story is an informal explanation of a software feature
 * written from the perspective of the end User
 *
 * EJ:
 * 
 * Feature - Login
 * 
 * User Story
 * As a user i should be able to login to the appp on entering valid
 * credentials on the login page
 * 
 * 
 * 
 *  What's Gherkin?
 * 
 * Is the domain-specific language for writting behavior scenarios, its a simple
 * programming language and its "code" is written into features files(.feature)
 * 
 * Gherkin scenarios are meant to be short and to sound like plain English, each
 * scenario has the following structure:
 * 
 * 1. Given - some initial state
 * 2. When - an action is taken
 * 3. Then - Verify an outcome
 * 
 * 
 * 
 * Ej on Gherkin:
 * 
 * Feature: Check login functionality
 * 
 * Scenario: 
 * 
 * -Given -> user is on login screen
 * -When ->user enters valid username and password
 * -And(can be user for some other action) -> clicks on login button
 * -Then  -> user is navigated to homepage
 */
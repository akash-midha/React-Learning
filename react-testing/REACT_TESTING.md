# React Tsting Library

### What is React Testing Library, and how is it different from Enzyme?

RTL focuses on testing component the way users interact with them (DOM-based) while Enzyme test component internals which can lead to brittle tests.

Jest is widely used as RTL.
Mock Service Worker (MSW) - Mock API calls at the network layer
Cypress - E2E Testing - to test full flows like login, navigation, forms.

### What is Jest ?

Jest is Javascript testing framework developed by facebook. It is used for unit testing react apps and other JS code. It provides a complete testing solution including:
    Test runner
    Assertion library
    Mocking and spies
    Code coverage

### What is unit testing and why it is important?

Unit Testing checks individual units in isolation to catch bugs early and ensure reliability.

### How to make components testable?

Keep components small, pure and pass props instead of handling all logics inside.

### Difference between unit, integration, and E2E testing?

Unit: tests individual pieces of logic
Integration: tests interaction between units
E2E: tests the full app flow (e.g. Cypress)
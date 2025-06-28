# ENVIRONMENT VARIABLES

### 1. What is .env file ?

It is plain text configuration file used to store environment variables such as API keys, secrets and environment specific settings without hardcoding them into codebase.

### 2. Why to use .env file ?

Keep secrets out of source code
Easily switch settings across environments
Clean and maintainable configuration

### 3. What are environment variables?

Environment variables are key-value pairs available at runtime that configure how app behaves in different environments (development, production, testing).

### 4. Why we add dot in env file?

To make it hidden configuration file which is standard practice. Also .gitignore commonly ignores dotfile by defauly.

### 5. Can .env values be accessed at runtime in frontend apps?

Not directly — in frontend (React, Vite), environment variables are statically embedded at build time, not dynamically read at runtime like in Node.js.

### 6. How can you use different .env files for different environments?

| File Name          | Used In            |
| ------------------ | ------------------ |
| `.env`             | default (all envs) |
| `.env.development` | during dev         |
| `.env.production`  | for production     |
| `.env.local`       | machine-specific   |

### 7. How do you access environment variables in React / Vite?

React (CRA): Use process.env.REACT_APP_XXX
Vite: Use import.meta.env.VITE_XXX


# package.json

### 1. What is package.json ?

package.json is metadata file for node.js (or react) that defines project dependencies, scripts , configurations. It automates task via scripts.

### 2. What is package-lock.json ?

package-lock.json is an auto-generated file that records the exact versions of every package (and their dependencies) installed in  project.


### 3. Difference b/w dependencies and peerDependencies ?

| **Type**           | **Purpose**                            | **Example Package**       | **When to Use**                                                                  |
| ------------------ | -------------------------------------- | ------------------------- | -------------------------------------------------------------------------------- |
| `dependencies`     | Required to run the app in production  | `react`, `axios`          | Your app needs this package to function — e.g., rendering UI or making API calls |
| `devDependencies`  | Needed only during development/testing | `jest`, `eslint`, `vite`  | Build tools, linters, and testing libraries that are not needed in production    |
| `peerDependencies` | Expected to be installed by the user   | `react` (in a UI library) | If you’re building a library that needs a specific version of another package    |



# Others

### 1. What is reportWebVitals in a React app?

reportWebVitals is a utility in Create React App (CRA) used to measure and report performance metrics of app (like load time, responsiveness, etc.) using Web Vitals API.

reportWebVitals helps track real-user performance of your React app.

It reports Core Web Vitals like:
    - LCP (Largest Contentful Paint) – loading speed
    - FID (First Input Delay) – interactivity
    - CLS (Cumulative Layout Shift) – visual stability


### 2. What is strict mode in React?

Strict Mode is a development-only feature in React that helps to identify potential problems in code — such as unsafe lifecycle methods, legacy API usage, or unexpected side effects.

It doesn’t affect production builds
It doesn’t block rendering — only warns in dev


### 3. What is config driven UI ?

Config-driven UI is a design pattern where the user interface (UI) is generated based on external configuration data (usually JSON), rather than being hardcoded in components.

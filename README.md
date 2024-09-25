# SimpleApp

- Test interactivity using fireEvent
- jest-dom assertions:
  - toBeEnabled()
  - toBeDisabled()
  - toBeChecked()
- getByRole option { name: /someName/i }
- Jest/Vitest describe to group tests
- Unit testing functions

# ESLint

- Popular linter for JavaScript
  - Linter: analyzes static text and marks syntax that breaks rules
  - Static: analyze code as written, not what happens when code is run
- Also catches errors in code
  - using variable before defining
  - importing from non-existing file

# Linting vs Formatting

- Formatters (like Prettier) automatically format code (indents, spacing)
  - example: spaces arounf curly braces:
    javascript
    ```
      import {useEffect} from 'react';
      import { useEffect } from 'react';
    ```
- Linters address format and style
  - example; preferred assertion method 
    javascript
    ```
      expect (checkbox).toHaveAttribute(checked);
      expect (checkbox).toBeChecked();
    ```
    
# Linting vs Formatting

- Plugins extended ESLint
- Testing Library and jest-dom ESLint plugins
  - Enforce best practices
-  https://github.com/testing-library/eslint-plugin-testing-library
-  https://github.com/testing-library/eslint-plugin-jest-dom

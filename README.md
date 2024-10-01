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

# Vitest ESLint Plugin

- Enforces best practices
- Makes sure test "experiments" don't make it into CI
- Prevents ESLint from flagging Vitest globals like 'test' and 'dercribe' 
- https://github.com/vitest-dev/eslint-plugin-vitest

# Jest ESLint Plugin

- The same as Vitest
- https://github.com/vitest-dev/eslint-plugin-jest

# screen Query Methods

command[All]ByQueryType

command
- get:expect element to be in DOM
- query: expect element not to be in DOM
- find: expect element to appear async

[All]
-(exclude) expect only one match
-(include) expect more than one match

QueryType
- Role (most preferred)
- AltText (images)
- Text (display elements)
- Form elements
  - PlaceholderText
  - LabelText
  - DisplayValue

References
https://testing-library.com/docs/queries/about/

# SummaryForm

- review testing flow where checkbox controls whether button is disabled
- mouseover for terms and conditions: userEvent
  - Requires setup step: user = userEvent.setup();
  - All methods are promises and must be awaited;
  - methods user.hover and user.unhover
- for element starting out not on page
  - queryByText
  - expect().not.toBeInTheDocument()

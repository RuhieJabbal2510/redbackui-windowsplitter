# Redback UI
Design system and UI component library for React, designed for Redback's data-driven applications.

 - [Live Storybook and documentation](https://redback-operations.github.io/redback-ui/)
 - [Release notes](https://github.com/Redback-Operations/redback-ui/tags)

## Installation

To install Redback UI in a React project, run:

```bash
npm install @redbackops/redback-ui
```

To update Redback UI to the latest version in an existing project, run one of the following:
```bash
npm update @redbackops/redback-ui
```
```bash
npm install @redbackops/redback-ui@latest
```

## Getting started

To use Redback UI, wrap your application (or the part of it that you want to style with Redback UI) in the `RedbackUiThemeProvider` component. 

The below example includes selecting the "Redback Smartbike" bundled theme. You can see all of the available themes in the [Storybook](https://redback-operations.github.io/redback-ui/?path=/docs/design-tokens-colours--docs).

```jsx
import { RedbackUiThemeProvider } from '@redbackops/redback-ui';
import themes from '@redbackops/redback-ui/themes';

<RedbackUiThemeProvider theme={themes.smartbike}>
    { /* Your app here */ }
</RedbackUiThemeProvider>
```

If you are using Redback UI outside of Redback Operations, you can pass in your own custom theme object. See the structure of the [default theme](https://github.com/Redback-Operations/redback-ui/blob/main/src/themes/default.ts) for guidance on the design tokens to include.


## Contributing

Redback UI is primarily worked on by students in Deakin University's School of IT capstone program, but we welcome external contributions.

To find out more about how Redback UI is built and how to contribute, please see the Redback Operations developer documentation, in particular:
- [Creating a new component](https://redback-operations.github.io/redback-documentation/docs/web-mobile-app-dev/frontend/new-components)
- [Using Styled Components](https://redback-operations.github.io/redback-documentation/docs/web-mobile-app-dev/frontend/styled-components)
- [Automated tests](https://redback-operations.github.io/redback-documentation/docs/web-mobile-app-dev/frontend/tests)
- [Submitting code](https://redback-operations.github.io/redback-documentation/docs/web-mobile-app-dev/frontend/submitting-work).
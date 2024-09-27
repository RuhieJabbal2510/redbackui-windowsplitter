import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

jest.mock('./src/providers/RedbackUiThemeProvider/GlobalStyle.tsx', () => ({
	GlobalStyle: () => null
}));

// Ref: https://github.com/NickColley/jest-axe?tab=readme-ov-file#testing-react-with-react-testing-library
expect.extend(toHaveNoViolations);
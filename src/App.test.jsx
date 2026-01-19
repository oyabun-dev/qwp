import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, options) => {
        if (options?.returnObjects) {
            return [];
        }
        return key;
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
  Trans: ({ i18nKey }) => i18nKey,
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Just a smoke test for now.
    // If App has required providers (like I18n), this might fail.
    // Let's assume for now it might crash if providers are missing.
    // Ideally we should test a simpler component or mock App's internals.
  });
});

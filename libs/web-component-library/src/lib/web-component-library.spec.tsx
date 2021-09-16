import { render } from '@testing-library/react';

import WebComponentLibrary from './web-component-library';

describe('WebComponentLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
});

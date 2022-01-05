import { render } from '@testing-library/react';

import OpenGraph from './open-graph';

describe('OpenGraph', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OpenGraph />);
    expect(baseElement).toBeTruthy();
  });
});

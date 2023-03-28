import { render } from '@testing-library/react';

import Falcon from './falcon';

describe('Falcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Falcon />);
    expect(baseElement).toBeTruthy();
  });
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';
import UserAvatarTest from '../tests/api/UserAvatar_test';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import sum from '../tests/ts/sum';

// it('renders correctly', () => {
//   // renderer.create(<App />);
//   const result = renderer.create(<UserAvatarTest />).toJSON();
//   expect(result).toMatchSnapshot();
// });

it('renders sum', () => {
  expect(sum(1, 2)).toBe(3);
});

// NightTable, LLC has been granted a license by John Nydam
// to use this document and the information contained in it
// for business objectives pertinent to the company.
// It must not be copied, duplicated, or used in any manner,
// or transmitted to others without the written consent of John Nydam.
// It must be returned to John Nydam if and/or when its authorized use is terminated.

import React from 'react';
import renderer from 'react-test-renderer';

import DummyComponent from '../components/DummyComponent';
import { Provider } from 'react-redux';

import { store } from '../App';


jest.mock('@stripe/stripe-react-native', () => {});


describe('Dummy Component', () => {
  it('Should Have 3 Children', () => {
    const tree = renderer.create(<Provider store={store}><DummyComponent /></Provider>).toJSON();
    expect(tree.children.length).toBe(3);
  });
});
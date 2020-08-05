import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(<Card />, document.createElement('div'));
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer.create(<Card title='Hello' content='world' />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer.create(<Card title='' content='' />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});

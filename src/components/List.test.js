import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
  it('renders without crashing', () => {
    ReactDOM.render(
      <List header='' cards={[]} />,
      document.createElement('div')
    );
    ReactDOM.unmountComponentAtNode(document.createElement('div'));
  });
  it('renders the UI as expected', () => {
    renderer
      .create(<List header='Hello' cards={['a', 'b', 'c', 'd', 'e']} />)
      .toJSON();
    expect(renderer).toMatchSnapshot();
  });
  it('renders the UI as expected', () => {
    renderer.create(<List header='' cards={[]} />).toJSON();
    expect(renderer).toMatchSnapshot();
  });
});

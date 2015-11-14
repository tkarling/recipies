jest.dontMock('../home');
//jest.dontMock('object-assign');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

import Home from '../home';

describe('Home', function () {
    it('gets initial state', function () {
        var home = TestUtils.renderIntoDocument(<Home  />);
        expect(home.state).toEqual(null);
        expect(home.props).toEqual({});
    });

    //it('renders component', function () {
    //    var home = TestUtils.renderIntoDocument(<Home  />);
    //    var homeDivs = TestUtils.scryRenderedDOMComponentsWithTag(home, 'div');
    //
    //    expect(homeDivs.length).toEqual(1);
    //});

});

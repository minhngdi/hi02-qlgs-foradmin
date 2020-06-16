import React from 'react';
import { enquireScreen } from 'enquire-js';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Footer from './Footer';
import PageHeader from '../../components/PageHeader';
import './style.scss';

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});

class HomeA extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile,
  };

  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === 'enter',
    });
  }
  render() {
    return (
      [
        <PageHeader />,
        <Banner key="banner" onEnterChange={this.onEnterChange} />,
        <Page1 key="page1" isMobile={this.state.isMobile} />,
        <Page2 key="page2" />,
        <Page3 key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" />,
        <Footer key="footer" />,
      ]
    );
  }
}
export default HomeA;

import React,{ PureComponent } from 'react';
import NavBar from '../Component/Home/home';
import Loading from '../Component/Loading/loading';

const withNav = ChildComponent => {

  return class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      }
    }

    handleToggleLoading = state => {
      this.setState({
        isLoading: state
      });
    }

    render() {
      const { isLoading } = this.state;
      return (
        <>
          <NavBar/>
          { isLoading && <Loading show/> }
          <ChildComponent toggleLoading={this.handleToggleLoading}/>
        </>
      );
    }
  }
}

export default withNav;
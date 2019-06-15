import React from 'react';
import { axiosGet } from '../api/axios';
import '../style/main.css';
class Supage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    console.log(this.props)
    return (
      <div>这是一个SubPage.js 中的article页面 <h4 >id为{this.props.match.params.id}</h4></div>
    )
  }

  componentDidMount() {
    const me = this;
  
  }
}
export default Supage;
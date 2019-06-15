import React from 'react';
import { axiosGet } from '../api/axios';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>这里仅仅只是在测试项目</div>
    )
  }

  componentDidMount() {
    const me = this;
    axiosGet("/data/cityinfo/101010100.html", function (result) {
      console.log(result);
    });
  }
}
export default Test;
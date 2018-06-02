import React, {Component} from 'react';
import FoodTitle from './FoodTitle';
import HmmButton from './HmmButton';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        "Chicken Rice", "대만 음식", "Jian Dao Jian", "태국 음식", "일본 음식", "Ban Mian", "아이스 크림!"
      ],
      select: null
    }
  }

  randomize() {
    let options = this.state.options;
    var i = 0;
    var interval = setInterval(() => {
      let newIndex = Math.floor(Math.random() * options.length);
      i++;
      this.setState({select: newIndex});
      if (i === 10)
        clearInterval(interval);
      }
    , 150);

  }

  render() {
    return (<div className="App ui text container">
      <div className="App-title five wide column">오늘은</div>
      <FoodTitle name={this.state.options[this.state.select] || "뭐"}></FoodTitle>
      <div className="App-title five wide column">먹을까?</div>
      <HmmButton onClick={this.randomize.bind(this)}></HmmButton>
    </div>);
  }
}

export default App;

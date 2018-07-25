import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
const botURL = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props)
    this.state = {
      bots: [],
      clickedBot: ""
    }
  }


  componentDidMount() {
    fetch(botURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          bots: data
        })
      })
  }

  findClickedBot = (bot) => {
    this.setState({
      clickedBot: bot
    })
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} clickedBot={this.state.clickedBot} />
        <BotCollection bots={this.state.bots} findClickedBot={this.findClickedBot} />
      </div>
    );
  }

}

export default BotsPage;

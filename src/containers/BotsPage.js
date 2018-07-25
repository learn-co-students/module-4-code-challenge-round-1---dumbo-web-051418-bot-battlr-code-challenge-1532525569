import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    armyBots: []
  }
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r=> r.json())
    .then(data => {
      this.setState ({
        bots:data
      })
    })
  }

  addCardToArmy = (selBot) => {
    let botArmyVir = []
    botArmyVir.push(selBot)
    // console.log(selBot)
    // console.log(botArmyVir)

    // currently i am only getting one bot in my array;
    // need to have all the selBots stored into array
    // was thinking spread operator to do this

    this.setState({
      armyBots: botArmyVir
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.armyBots}/>
        < BotCollection bots={this.state.bots} addCardToArmy={this.addCardToArmy}/>
      </div>
    );
  }

}

export default BotsPage;

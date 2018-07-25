import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    currentBot: null,
    bots: [],
    army: []
  }

  goBack = () => {
    this.setState((prevState) => {
      return {currentBot: null}
    });
  }

  selectBot = (bot) => {
    this.setState((prevState) => {
      return {currentBot: bot}
    });
  }

  botAlreadyInArmy = (bot) => {
    return this.state.army.find(botInArmy => botInArmy === bot) ? true : false;
  }

  enlist = () => {
    console.log(this.botAlreadyInArmy(this.state.currentBot));
    if(!this.botAlreadyInArmy(this.state.currentBot)){
      this.setState(prevState => ({
        army: [...prevState.army, prevState.currentBot]
      }))
    }
  }

  dismiss = (bot) => {
    const newArmy = this.state.army.filter(botInArmy => botInArmy.id !== bot.id);

    this.setState(prevState => ({
      army: [...newArmy]
    }))
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
        .then(bots => {
          this.setState((prevState) => {
            return {bots: bots}
          });
        });
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} dismiss={this.dismiss}/>
        { this.state.currentBot ? <BotSpecs bot={this.state.currentBot} goBack={this.goBack} enlist={this.enlist} /> : <BotCollection bots={this.state.bots} click={this.selectBot}/> }
      </div>
    );
  }

}

export default BotsPage;

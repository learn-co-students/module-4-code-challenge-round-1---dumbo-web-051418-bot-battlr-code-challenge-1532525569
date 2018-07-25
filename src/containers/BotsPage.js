import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    botsArray: [],
    enlistedBots: []
  }

  componentDidMount() {
    const botsURL = `https://bot-battler-api.herokuapp.com/api/v1/bots`;
    fetch(botsURL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        botsArray: data

      })
    })
  }

  enlistBot = (selectedBot) => {
    const newArray = this.state.botsArray.filter(bot => {
      return bot.id !== selectedBot.id
    })


    this.setState((previousState) =>  {
      return {botsArray: newArray,
      enlistedBots: [...previousState.enlistedBots,selectedBot]}
    }
  )
  }

  // removeBot = (selectedBot) => {
  //   const newArray = this.state.enlistedBots.filter(bot => {
  //     return bot.id !== selectedBot.id
  //   })
  //
  //   this.setState((previousState) =>  {
  //     return {
  //     enlistedBots: newArray}
  //   }
  //
  // }


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy enlistedBots={this.state.enlistedBots} removeBot={this.removeBot} />
        <BotCollection botsArray={this.state.botsArray} enlistBot={this.enlistBot} />
      </div>
    );
  }

}

export default BotsPage;

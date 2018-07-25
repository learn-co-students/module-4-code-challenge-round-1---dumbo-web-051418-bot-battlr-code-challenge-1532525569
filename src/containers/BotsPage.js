import React from "react";
import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    allBots: [],
    armyBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(data =>
        this.setState({
          allBots: data
        }))
  }

  // handleFilter = (bot) => {
  //   this.setState({
  //     allBots: bot
  //   })
  // }

  handleClick = (bot) => {
    this.setState({
      armyBots: [...this.state.armyBots, bot]
    })
    // e.target.id
  }


  // so i wasted a bunch of time trying to remove a bot from the colllection when clicked and that's not part of the deliverables, but basically here, i would filter the armybot array to try and find the one that was clicked, and then setting the state to the new array.
  handleArmyClick = (bot) => {
    const newArmy = this.state.armyBots.filter((bot) => bot.id === this.props.id)
    this.setState({
      armyBots: newArmy
    })
  }



  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} armyBots={this.state.armyBots} handleClick={this.handleClick}/>
        <YourBotArmy armyBots={this.state.armyBots} handleArmyClick={this.handleArmyClick}/>
      </div>
    );
  }

}

export default BotsPage;
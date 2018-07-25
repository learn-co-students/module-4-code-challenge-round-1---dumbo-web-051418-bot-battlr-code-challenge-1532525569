import React from "react";

//Had to create a new BotCardArmy component since the onClick on BotCard.js was already being used to add the bot into the bot army
import BotCardArmy from "../components/BotCardArmy";

class YourBotArmy extends React.Component {
  //your bot army code here...
  constructor(props) {
    super(props)
    this.state = {
      botArmy: []
    }
  }

  existInArmy = () => {
    return this.state.botArmy.find(bot => bot === this.props.clickedBot)
  }

  // If the clickedBot existed in the army, we don't need to update the botArmy state since there can't be duplicates
  renderArmy = () => {
    let result = this.existInArmy()
    if (result === undefined) {
      this.setState(prevState => ({
        botArmy: [...prevState.botArmy, this.props.clickedBot]
      }))
      }
    }

  // Call renderArmy first to update the state if needed, then render it.
  // Line 30 is giving the errors...
  renderArmyBots = () => {
    this.renderArmy()
    return this.state.botArmy.map((bot) => {
      return <BotCardArmy key={bot.id} bot={bot} deleteClickedBot = {this.deleteClickedBot}/>
    })
  }

  // Works but one bot will still exist due to the automatic re-rendering of the bots after the setState in deleteClickedBot
  // The re rendering will call the this.renderArmy() in renderArmyBots again which will update the botArmy again and add the clickedBot into the array
  filterDeletion = (botDelete) => {
    const updated = this.state.botArmy.filter(bot => bot !== botDelete)
    console.log(updated)
    return updated
  }

  deleteClickedBot = (bot) => {
    const updatedBots = this.filterDeletion(bot)
    this.setState({
      botArmy: updatedBots
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmyBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

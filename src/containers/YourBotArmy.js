import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderArmyBots = () => {
    this.props.bots.map((bot) => {
      console.log(bot)

      // trying to figure out why my botCard is not displaying
      // i called the renderArmyBots function inside the div so not sure why its not
      // adding the BotCard 
      return <BotCard bot={bot} key = {bot.id}/>
    })
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmyBots()}

          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;

import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderMyArmy = () => {
    console.log(this.props.enlistedBots)
    if (this.props.enlistedBots)
    {
      return this.props.enlistedBots.map(bot => <BotCard bot={bot} selectBot={this.props.removeBot} />)
    } else {
      return "Enlist some bots."
    }
    }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
             { this.renderMyArmy() }

          </div>
        </div>
      </div>
    );
  }
};

export default YourBotArmy;

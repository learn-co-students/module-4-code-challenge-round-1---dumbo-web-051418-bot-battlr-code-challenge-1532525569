import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  renderBotCard = () => {
    return this.props.botsArray.map( bot => {
      return <BotCard bot={bot} selectBot={this.props.enlistBot} key={bot.id} />
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.renderBotCard() }

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

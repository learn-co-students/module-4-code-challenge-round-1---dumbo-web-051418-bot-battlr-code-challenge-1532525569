import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  eachBot = () => {
    return this.props.bots.map((bot) => <BotCard key={bot.id} bot={bot} click={this.props.click}/>);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  { this.eachBot() }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;

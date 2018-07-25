import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  // renderBotCards = () => {
  //   this.props.allBots.map((bot) => {
  //     return <BotCard bot={bot} key={bot.id}/>
  //   })
  // }
  /* map over the fetched data to give to botCard*/

  filterBots = () => {
    const newArrayBots = this.props.allBots.filter(bot => this.props.allBots.id !== this.props.armyBots.id)

    // if bot id is in the armyBots arr then do not render them
    return newArrayBots

  }


  render() {
    return (
      <div className="ui four column grid">
    		<div className="row">
    		   {this.props.allBots.map((bot) => {
             return <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>
           })}

    		  Collection of all bots
    		</div>
  	  </div>
    );
  }

};

export default BotCollection;
import React from 'react'
import Clappr from 'clappr'

class ClapprPlayer extends React.Component {

  componentDidMount(){
    
    const { imdbID, trailer } = this.props;
    
    this.clappr_player = new Clappr.Player({
      parent: `#${imdbID}`,
      source: {trailer}
    });
        
  }
  
  componentWillUnmount() {
    this.clappr_player.destroy();
    this.clappr_player = null;
  }
  
  render() {

    const { id } = this.props;
    
    return (
      <div>
        <p>Active</p>
        <p id={id} />
      </div>
    );
  }
  
}

export default ClapprPlayer
// @flow

import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Spinner from './Spinner';
import ClapprPlayer from './ClapprPlayer';
import { getAPIDetails } from './actionCreators';

class Details extends React.Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }
  props: {
    rating: string,
    getAPIData: Function,
    show: Show
  };
  render() {
    const { title, description, year, trailer } = this.props.show;
    let rating;
    if (this.props.rating) {
      rating = <h3>{this.props.rating}</h3>;
    } else {
      rating = <Spinner />;
    }
    return (
      <div>
        <Header />
       
        <div>
           <ClapprPlayer id="video" source={`${trailer}`} width="640" height="360" />
        </div>

         <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          <h2>{trailer}</h2>
          {rating}
          
          {/* Stop showing big honking poster */}
          { /* <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} /> */}
          
          <p>{description}</p>
        </section>
        
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] ? state.apiData[ownProps.show.imdbID] : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch: Function, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.show.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

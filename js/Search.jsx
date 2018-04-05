// @flow

import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const SidebarItem = (props) => (
  <div style={{
    whitespace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props} />
)

const Search = (props: {
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show>
}) => (
  <div className="search">
    <Header showSearch />
    <SidebarItem>
      {props.shows
        .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
        .map((show, index) => <ShowCard {...show} key={show.imdbID} id={index} />)}
    </SidebarItem>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);
import React, { Component } from 'react';
import ThumbnailLabel from './ThumbnailLabel';
const posts=[
  {id:'post0',title:'안녕',content:'안녕하니'},
  {id:'post1',title:'비가와',content:'눈이와'},
  {id:'post2',title:'추워',content:'눈이와서추워'},
  {id:'post3',title:'너무추워',content:'많이춥다'}
];

class Thumbnail extends Component{
  render() {

    const renderPosts = posts.map((post)=>{

      return(

        <ThumbnailLabel key={post.id} title={post.title} content={post.content}/>
      )
    });

    return (
      <div className="row">
        {renderPosts}
      </div>
    );
  };
};


export default Thumbnail;

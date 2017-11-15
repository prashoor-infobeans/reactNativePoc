import React, { Component } from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Posts/>
            <Pages/>
         </div>
      );
   }
}


class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
componentDidMount() {
    let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/posts";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }
render() {
    let posts = this.state.posts.map((post, index) => {
      
      return <article key={index}>
                <header>
                        <h3>{post.title.rendered}</h3>
                </header>
                <p>{post.content.rendered}</p>
                <footer>
                        <a href="" className="button special">More</a>
                </footer>
        </article>
    });
return (
        <div className="inner">
            <div className="flex flex-2">
                    {posts}
            </div>
        </div>
    )
  }
}

class Pages extends Component {
  constructor() {
    super();
    this.state = {
      pages: []
    }
  }
componentDidMount() {
    let dataURL = "http://rohit.corporatesitepoc.com/index.php/wp-json/wp/v2/pages";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          pages: res
        })
      })
  }
render() {
    let pages = this.state.pages.map((page, index) => {
      
      return <article key={index}>
                <header>
                        <h3>{page.title.rendered}</h3>
                </header>
                <p>{page.content.rendered}</p>
                <footer>
                        <a href="" className="button special">More</a>
                </footer>
        </article>
    });
return (
        <div className="inner">
            <div className="flex flex-2">
                    {pages}
            </div>
        </div>
    )
  }
}
export default App;
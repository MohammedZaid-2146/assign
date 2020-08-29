import React from 'react';
import './App.css';
import PostForm from './Form/PostForm';
import Posts from './Form/posts';

function App() {
  return (
    <div className="posts">
        <section className="mainblock">
            <article>

              <div className="search">
                search
              </div>
                <div className="textBlock">
                  <PostForm/>
                </div>


                <div className="publishBlock">
                  publish post
                      <Posts/>             
                  </div>
            </article>
        </section>
    </div>
  );
}

export default App;

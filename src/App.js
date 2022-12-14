import React from 'react';
import profilePhoto from './image/profile-img.jpg';
import slackLogo from './image/slacklogo.png';
import gitHubLogo from './image/gitHubLogo.png';
import i4gLogo from './image/i4gLogo.png';
import LinkList from './LinkList';
import icon from './image/icon.svg'
import I4G from './image/I4G.svg'

function App() {
  return (
    <main className='section'>
      <section className='profile'>
        <div className='profile-info'>
          <img src={profilePhoto} alt='profilePhoto' id='profile__img' />
          <h2 id='twitter'>@nath7521</h2>
          <h2 id='slack'>nath752L</h2>
        </div>
        <button className='share'>
          <img src={icon} alt="" />
        </button>
      </section>
      <LinkList />

      <article className='section-footer'>
        <img src={slackLogo} className='section-img slacks' alt='slack logo' />
        <img src={gitHubLogo} className='section-img git' alt='slack logo' />
      </article>

      <footer className='footer'>
        <div className='footer-content'>
          <h2 className='zurilogo footer-imgs'>
            Zuri<span className='zuri'></span>Internship
          </h2>

          <p className='attribution  footer-imgs'>
            HNG Internship 9 Frontend Task
          </p>
          <img src={I4G} alt='i4gLogo' className='i4glogo footer-imgs' />
        </div>
      </footer>
    </main>
  );
}

export default App;

import React from 'react';
import profilePhoto from './image/profile-img.jpg';
import slackLogo from './image/slacklogo.png';
import gitHubLogo from './image/gitHubLogo.png';
import i4gLogo from './image/i4gLogo.png';
import LinkList from './LinkList';

function App() {
  return (
    <main className='section'>
      <section className='profile'>
        <img src={profilePhoto} alt='profilePhoto' id='profile_img' />
        <h2 id='twitter'>
          <span className='twitter-span'>twitter:</span>@nath7521
        </h2>
        <div id='slack'>nath752L</div>
      </section>
      <LinkList />

      <article className='section-footer'>
        <img src={slackLogo} className='section-img slacks' alt='slack logo' />
        <img src={gitHubLogo} className='section-img git' alt='slack logo' />
      </article>

      <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-imgs'>
            <h2 className='zurilogo'>
              Zuri<span className='zuri'></span>Internship
            </h2>
          </div>
          <div className='footer-imgs'>
            <p className='attribution '>HNG Internship 9 Frontend Task</p>
          </div>
          <div className='footer-imgs'>
            <img src={i4gLogo} alt='i4gLogo' className='i4glogo ' />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;

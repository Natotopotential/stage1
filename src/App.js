import React from 'react';
import profilePhoto from './image/profile-img.jpg';
import slackLogo from './image/slacklogo.png';
import gitHubLogo from './image/gitHubLogo.png';
import LinkList from './LinkList';

function App() {
  return (
    <main className='section'>
      <section className='profile'>
        <img src={profilePhoto} alt='profilePhoto' className='profile_img' />
        <h2 className='twitter'>
         <span>twitter:</span>@nath7521
        </h2>
        <div className='slack'>nath</div>
      </section>
      <LinkList />

      <footer className='footer'>
        <img src={slackLogo} className='footer-img slacks' alt='slack logo' />
        <img src={gitHubLogo} className='footer-img git' alt='slack logo' />
      </footer>
    </main>
  );
}

export default App;

import React from 'react';

function LinkList() {
  return (
    <article className='links'>
      <div className='link'>
        <a
          href='https://training.zuri.team/'
          target='_blank'
          id='btn_zuri'
          className='btn'
        >
          Zuri Team
        </a>
      </div>
      <div className='link'>
        <a
          href='https://books.zuri.team/'
          target='_blank'
          id='books'
          className='btn'
        >
          Zuri Books
        </a>
      </div>
      <div className='link'>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=nath'
          target='_blank'
          id='book_python'
          className='btn'
        >
          Python Book
        </a>
      </div>
      <div className='link'>
        <a
          href='https://background.zuri.team/'
          target='_blank'
          id='pitch'
          className='btn'
        >
          Background Checks for Coders
        </a>
      </div>
      <div className='link'>
        <a
          href='https://books.zuri.team/design-rules'
          target='_blank'
          id='book_design'
          className='btn'
        >
          Books
        </a>
      </div>
    </article>
  );
}

export default LinkList;

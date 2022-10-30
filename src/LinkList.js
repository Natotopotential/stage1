import React from 'react';

function LinkList() {
  return (
    <article className='links'>
      <a
        href='https://training.zuri.team/'
        target='_blank'
        id='btn_zuri'
        className='btn'
      >
        <div className='link'>Zuri Team</div>
      </a>

      <a
        href='https://books.zuri.team/'
        target='_blank'
        id='books'
        className='btn'
      >
        <div className='link'> Zuri Books</div>
      </a>

      <a
        href='https://books.zuri.team/python-for-beginners?ref_id=nath'
        target='_blank'
        id='book_python'
        className='btn'
      >
        <div className='link'> Python Book</div>
      </a>

      <a
        href='https://background.zuri.team/'
        target='_blank'
        id='pitch'
        className='btn'
      >
        <div className='link'>Background Checks for Coders</div>
      </a>

      <a
        href='https://books.zuri.team/design-rules'
        target='_blank'
        id='book_design'
        className='btn'
      >
        <div className='link'>Books</div>
      </a>
    </article>
  );
}

export default LinkList;

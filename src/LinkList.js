import React from 'react';

function LinkList() {
  return (
    <article className='links'>
      <a
        href='https://training.zuri.team/'
        target='_blank'
        id='btn__zuri'
        className='btn'
      >
        Zuri Team
      </a>

      <a
        href='https://books.zuri.team/'
        target='_blank'
        id='books'
        className='btn'
      >
        Zuri Books
      </a>

      <a
        href='https://books.zuri.team/python-for-beginners?ref_id=nath'
        target='_blank'
        id='book__python'
        className='btn'
      >
        Python Book
      </a>

      <a
        href='https://background.zuri.team/'
        target='_blank'
        id='pitch'
        className='btn'
      >
        Checks for Coders
      </a>

      <a
        href='https://books.zuri.team/design-rules'
        target='_blank'
        id='book__design'
        className='btn'
      >
        Books
      </a>
    </article>
  );
}

export default LinkList;

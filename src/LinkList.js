import React from 'react';

function LinkList() {
  return (
    <ul className='links'>
      <li className='link'>
        <a href='https://training.zuri.team/' target='_blank'>
          {' '}
          <button className='btn_zuri btn'> Zuri Team</button>{' '}
        </a>
      </li>
      <li className='link'>
        <a href='https://books.zuri.team/ target="_blank"'>
          {' '}
          <button className='books btn'>Zuri Books</button>{' '}
        </a>
      </li>
      <li className='link'>
        <a
          href='https://books.zuri.team/python-for-beginners?ref_id=nath'
          target='_blank'
        >
          <button className='book_python btn'>Python Book</button>
        </a>
      </li>
      <li className='link'>
        <a href='https://background.zuri.team/' target='_blank'>
          {' '}
          <button className='pitch btn'>
            Background Checks for Coders
          </button>{' '}
        </a>
      </li>
      <li className='link'>
        <a href='https://books.zuri.team/design-rules' target='_blank'>
          {' '}
          <button className='book_design btn'>Design Books</button>{' '}
        </a>
      </li>
    </ul>
  );
}

export default LinkList;

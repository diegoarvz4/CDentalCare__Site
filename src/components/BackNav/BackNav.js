import React from 'react';
import { Link } from 'react-router-dom';
import './BackNav.scss';

export default () => {
  return (
    <nav className="BackNav">
      <Link to={'/'}>
        <span>{'<'}</span>
      </Link>
    </nav>
  )
}
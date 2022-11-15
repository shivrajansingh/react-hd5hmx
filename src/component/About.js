import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      I am About
      <Link to={'/'}> Home </Link>
    </React.Fragment>
  );
}

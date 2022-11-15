import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      I am Home
      <Link to={'/about'}> About </Link>
    </React.Fragment>
  );
}

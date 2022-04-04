import React from 'react';

const AppTitle = React.forwardRef((_, ref) => (
  <div ref={ref} id="app-title" className="unselectable">
    <a className="no-decoration" href="/">
      <h1 style={{ display: 'inline' }}>Eventalia</h1>
    </a>
  </div>
));

export default AppTitle;
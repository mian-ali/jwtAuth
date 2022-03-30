import React from 'react';

function Main() {
  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.reload();
  };
  return (
    <div>
      <h1>Main Component</h1>

      <button onClick={handleLogout}>Logout </button>
    </div>
  );
}

export default Main;

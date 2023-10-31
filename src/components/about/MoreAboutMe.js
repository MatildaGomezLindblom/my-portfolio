import React from 'react';
import { useNavigate } from 'react-router-dom';


function MoreAboutMe() {
    const navigate = useNavigate();

  return (
    <div style={{  width: '100vw', height: '100vh',backgroundColor: 'white' }}>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <p>hejhej</p>
    </div>
  );
}

export default MoreAboutMe;

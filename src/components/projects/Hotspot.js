import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary';
import "../../styles/Hotspot.scss";
import { useLayoutEffect } from 'react';
import ButtonSecondary from '../ButtonSecondary';


function Hotspot() {
    const navigate = useNavigate();
    
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  return (
    <div class="hotspotContainer">

        <p>hejhej</p>
    </div>
  );
}

export default Hotspot;

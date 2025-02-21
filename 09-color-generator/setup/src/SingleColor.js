import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);
  const bcg = rgb.join(',');
  // console.log(bcg);
  const hexValue = `#${hexColor}`;
  console.log(hexColor, hex);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000);

    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article 
    className={`color ${index > 10 && 'color-light'}`} 
    style={{background:`rgb(${bcg})`}} 
    onClick={
      () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }
    }
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p> }
    </article>
  );
}

export default SingleColor

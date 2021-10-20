import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const hex = rgbToHex(...rgb);
  const bcg = rgb.join(',');
  // console.log(bcg);
  console.log(hexColor, hex);
  return (
    <article className={`color ${index > 10 && 'color-light'}`} style={{background:`rgb(${bcg})`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hexColor}</p>
    </article>
  );
}

export default SingleColor

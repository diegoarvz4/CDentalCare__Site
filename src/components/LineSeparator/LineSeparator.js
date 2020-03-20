import React from 'react';

const LineSeparator = () => {
  
  const style = {
    borderBottom: '1px solid #e5e5e5',
    height: '1px',
    margin: '80px auto',
    width: '70%',
  }
  
  return (
    <div className="LineSeparator"  style={style} />
  )
}

export default LineSeparator;

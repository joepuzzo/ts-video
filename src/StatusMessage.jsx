import React from 'react';

const Info = () => {
  return <div className="info"><small className="infoIcon">i</small></div>
}

export const StatusMessage = ({ children, title="Info" }) => {
  return (
    <div className="status-message">
      <div style={{
        display: 'flex',
        marginBottom: '10px'
      }}>
        <Info />
        <strong>
          {title} 
        </strong>
      </div>
      <small>
        {children}
      </small>
    </div>
  )
};
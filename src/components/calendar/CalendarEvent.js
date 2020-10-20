import React from 'react';

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <strong
        style={{
          whiteSpace: 'pre-wrap',
        }}
      >
        {title}
      </strong>
      <p> - {user.name}</p>
    </div>
  );
};

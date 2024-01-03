import React from 'react';

const InputFeedback = ({children,}: {children: React.ReactNode}) => {
  return (
    <div className="text-red-400">
        {children}
    </div>
  );
}

export default InputFeedback;
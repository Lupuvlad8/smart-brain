import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
    return (
        <div className='rank-container'>
            <div>
                {`${name}, your current entry count is:`}
            </div>
            <div>
                {entries}
            </div>
        </div>
  );
}

export default Rank;

import React from 'react';
import Board from '../Board/Board.jsx';

import resetStyles from 'normalize.css';
import baseStyles from '../../styles/base.less';

export default (props) => {
    return <div className="app">
        <Board/>
    </div>;
};

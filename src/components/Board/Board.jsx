import React from 'react';
import Column from '../Column/Column.jsx';

import styles from './Board.less';

export default (props) => {

    const cards = {
        1: [
            { name: 'Eggs' },
            { name: 'Bacon' }
        ],
        2: [
            { name: 'Spam' },
            { name: 'Baked Beans' }
        ],
        3: [
            { name: 'Gouda' },
            { name: 'Tulips' },
            { name: 'Sausage' }
        ]
    };

    return <div className={styles.board}>
        <header className={styles.boardHeader}>
            <h1>CSS Modules in React!</h1>
        </header>
        <ol className={styles.columns}>
            <li className={styles.columnItem}>
                <Column name="To Do" cards={cards[1]}/>
            </li>
            <li className={styles.columnItem}>
                <Column name="Doing" cards={cards[2]}/>
            </li>
            <li className={styles.columnItem}>
                <Column name="Done" cards={cards[3]}/>
            </li>
        </ol>
    </div>;
};

import React from 'react';
import Card from '../Card/Card.jsx';

import styles from './Column.less';

export default (props) => {
    return <div className={styles.column}>
        <header className={styles.columnHeader}>
            <h2>{ props.name }</h2>
        </header>
        <ol className={styles.cards}>
            { props.cards.map((card) => {
                return <li key={ card.name }><Card name={ card.name } /></li>;
            }) }
        </ol>
    </div>;
};

import React from 'react';

import styles from './Card.less';

export default (props) => {
    return <div className={styles.card}>
        { props.name }
    </div>;
};

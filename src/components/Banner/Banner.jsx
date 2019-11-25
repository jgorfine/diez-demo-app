import React, { useCallback, useState, useEffect } from 'react';
import { Diez, DesignLanguage } from 'diez-jlg-demo';
import styles from './Banner.module.scss';

export const Banner = () => {
    const [ds, setDs] = useState();
    const diez = new Diez(DesignLanguage);

    useEffect(() => {
        // Here we are observing hot updates to our design language.
        //
        // Since this instance of Diez was initialized with DesignLanguage, it will deliver updates to the DesignLanguage
        // object described in `src/DesignLanguage.ts` (relative to the root of the Diez project).
        diez.attach(setDs);
    }, []);

    if (typeof ds === 'undefined') {
        return null;
    }

    return (
        <header role="banner" className={styles.mastheadContainer}>
            <div className={styles.masthead}></div>
        </header>
    )
}
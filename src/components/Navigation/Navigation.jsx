import React, { useCallback, useState, useEffect } from 'react';
import { Diez, DesignLanguage } from 'diez-jlg-demo';
import styles from './Navigation.module.scss';

export const Navigation = () => {
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
        <nav role="navigation" className={styles.mastheadContainer}>
            
        </nav>
    )
}
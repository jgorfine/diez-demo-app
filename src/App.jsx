import React, { useCallback, useState, useEffect } from 'react';
import { Diez, DesignLanguage } from 'diez-jlg-demo';
import styles from './App.module.scss';

import { Banner } from './components/Banner/Banner.jsx'

const Animation = (props) => {
  const animation = useCallback((node) => {
    if (node !== null) {
      props.lottie.mount(node);
    }
  }, []);

  return (
    <div
      className={styles.animation}
      ref={animation}
      style={props.style}
    />
  );
}

const App = () => {
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
    <>
      <Banner />
      <main className={styles.contentContainer}>
      </main>
    </>
  );
}

export default App;

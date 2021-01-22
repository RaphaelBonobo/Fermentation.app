import React from 'react';

import Strings from 'res/strings.js';
import Header from 'library/component/Header.js';
import Subheader from 'library/component/Subheader.js';

const App = () => {
  return (
    <>
      <Header header={Strings.testHeader} />
      <Subheader subheader={Strings.testSubheader} />
    </>
  );
};

export default App;

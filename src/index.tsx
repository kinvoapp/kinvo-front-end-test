import React from 'react';
import { render } from 'react-dom';

import App from './App';

// @ts-ignore
// eslint-disable-next-line camelcase,no-undef
__webpack_public_path__ = process.env.NODE_ENV === 'development' ? __webpack_public_path__ : `${process.env.APP_PATH}`;
render(<App />, document.getElementById('app'));

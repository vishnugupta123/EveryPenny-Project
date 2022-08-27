import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import './index.css';

import App from './App';
import { Provider } from './context/context';

ReactDOM.render(<SpeechProvider appId="0b179a74-0872-42bf-a63d-225f3380ac66" language="en-US"><Provider><App /></Provider></SpeechProvider>,document.getElementById('root'));
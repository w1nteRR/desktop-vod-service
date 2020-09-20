import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'

import { history, store } from './redux/store'


import "slick-carousel/slick/slick.css"
import './styles.scss'

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>

, mainElement)


'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import avatar from './images/avatar.jpg'

class Search extends React.Component {
    render() {
        return <div class="search">
            Search Text2<img src={avatar}></img>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)
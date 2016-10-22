import './searchPage.scss';
import React from 'react';
import Search from './search/search';

export default class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <Search/>
            </div>
        );
    }
}
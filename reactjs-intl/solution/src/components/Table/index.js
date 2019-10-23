import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import './style.css'

export default class Table extends React.Component {
    render() {
        const { data, onDelete } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody list={data} onDelete={onDelete}/>
            </table>
        );
    }
}
import React from 'react';
import Thumbnail from '../Thumbnail';
import images from '../../images/index';

export default class TableBody extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tbody>
                {list.map((item, index) => {
                    return (<tr key={index}>
                        <td><Thumbnail src={images[item.img]} alt={item.alt} /></td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><button className="btn-icon" onClick={() => this.props.onDelete(index)}>
                            <i className="material-icons">delete</i>
                        </button></td>
                    </tr>);
                })}
            </tbody>);
    }
}
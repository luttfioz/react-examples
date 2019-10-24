import React from 'react';
import images from '../../images';
import Thumbnail from '../Thumbnail';

class TableBody extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tbody>
                {
                    list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th><Thumbnail src={images[item.img]} alt={item.alt} /></th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    })
                }
            </tbody>);
    }
}

export default TableBody;
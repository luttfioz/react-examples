import React from 'react';
import { FormattedMessage } from 'react-intl';
import './style.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formOpen: false,
            img: '',
            name: '',
            price: '',
            description: ''
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({ formOpen: !this.state.formOpen });
        const { img, name, price, description } = this.state;
        const product = { img, name, price, description };
        this.props.onSubmit(product);
    }
    render() {
        const button = <button className="fab" onClick={() => { this.setState({ formOpen: !this.state.formOpen }) }}>
            <i className="material-icons">add_circle</i></button>;
        const form = (
            <div className="form-container">
                <h3><FormattedMessage id="myApp.components.Form.addNewProduct"/></h3>
                <label><FormattedMessage id="myApp.components.Form.image"/></label><input value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
                <label><FormattedMessage id="myApp.components.Form.name"/></label><input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                <label><FormattedMessage id="myApp.components.Form.price"/></label><input value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                <label><FormattedMessage id="myApp.components.Form.description"/></label><input value={this.state.decription} onChange={e => this.setState({ description: e.target.value })} />
                <button onClick={this.onClick}><FormattedMessage id="myApp.components.Form.add"/></button></div>
            );
        return this.state.formOpen ? form : button;
    }
}
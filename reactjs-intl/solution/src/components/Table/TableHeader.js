import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.image"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.name"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.price"/></th>
                    <th><FormattedMessage id="myApp.components.Table.TableHeader.description"/></th>
                </tr>
            </thead>);
    }
}
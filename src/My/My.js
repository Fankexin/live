import React, { Component } from 'react';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';

export default class My extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                >我的</NavBar>
            </div>
        )
    }
}

import React from 'react';
import { TabBar ,NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
import My from './My/My';
import Home from './Home/Home';
import Linggan from './Linggan/Linggan';
import Store from './Store/Store';

export default class AppTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0, background: '#fff' }}>
                
                <TabBar
                    unselectedTintColor="#000"
                    tintColor="#3fcccb"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="shouye"
                        icon={<i style={{ fontSize: 20 }} className='iconfont icon-shouye'></i>}
                        selectedIcon={<i style={{ fontSize: 20 }} className='iconfont icon-shouye'></i>}
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                        }}
                    >
                        <Home />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{ fontSize: 20 }} className='iconfont icon-linggan'></i>}
                        selectedIcon={<i style={{ fontSize: 20 }} className='iconfont icon-linggan'></i>}
                        title="灵感"
                        key="linggan"
                        selected={this.state.selectedTab === 'linggan'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'linggan',
                            });
                        }}
                    >
                        <Linggan />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{ fontSize: 20 }} className='iconfont icon-shop'></i>}
                        selectedIcon={<i style={{ fontSize: 20 }} className='iconfont icon-shop'></i>}
                        title="商城"
                        key="shangcheng"
                        selected={this.state.selectedTab === 'shangcheng'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shangcheng',
                            });
                        }}
                    >
                        <Store />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{ fontSize: 20 }} className='iconfont icon-wode'></i>}
                        selectedIcon={<i style={{ fontSize: 20 }} className='iconfont icon-wode'></i>}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                        <My />
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
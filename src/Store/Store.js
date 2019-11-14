import React, { Component } from 'react';
import { NavBar, Icon, Tabs, Carousel,WingBlank,SearchBar,Flex} from 'antd-mobile';

export default class Share extends Component {
    render() {
        return (
            <div style={{ position: 'relative' , background:'#eee'}}>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                    rightContent={[
                        <i style={{ fontSize: 22, lineHeight: '22px', marginRight: '8px' }} className='iconfont icon-icon-test'></i>
                    ]}
                >商城</NavBar>
                <div style={{ position: 'absolute',zIndex:1,left:0, width: '100%', height: '18%' }}>
                    <SearchBar placeholder="输入关键字搜索" maxLength={8} style={{background:'#000',opacity:'0.5'}}/>
                </div>
                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{ backgroundColor: '#fff' }}
                    dotActiveStyle={{ backgroundColor: '#3fcccb' }}
                >
                    {[1, 2, 3, 4].map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={require('../images/store-banner1.png')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <div style={{backgroundColor:'#fff',padding:'16px 0'}}>
                    <div style={{margin:'0 20px'}}>
                        <Flex>
                            {[
                                {color: '#fe3a76', text: '桌', icon: 'icon-zhuozi'},
                                {color: '#29c1fd', text: '床', icon: 'icon-chuang'},
                                {color: '#fc9918', text: '椅', icon: 'icon-yideng'},
                                {color: '#2bd3d2', text: '几', icon: 'icon-chaji'},
                                {color: '#fc2b29', text: '柜', icon: 'icon-iconset0499'}
                            ].map((val, idx) => (
                                <Flex.Item key={idx}>
                                    <div style={{textAlign:'center',margin:'0 8px'}}>
                                        <div style={{borderRadius:'50%',backgroundColor: val.color,paddingBottom:'100%',height:0,width:'100%',margin:'0 auto'}}>
                                            <i style={{fontSize:30,color:'#fff',marginTop:'25%',display:'inline-block'}} className={`iconfont ${val.icon}`}></i>
                                        </div>
                                        <div style={{marginTop:'10px'}}>{val.text}</div>
                                    </div>
                                </Flex.Item>
                            ))}
                        </Flex>
                    </div>
                    <div style={{margin:'20px 20px'}}>
                        <Flex>
                            {[
                                {color: '#3c3cf7', text: '书架', icon: 'icon-shujia'},
                                {color: '#a80bff', text: '沙发', icon: 'icon-icon13'},
                                {color: '#25e077', text: '家居饰品', icon: 'icon-shanzi'},
                                {color: '#8e86c1', text: '户外家具', icon: 'icon-huwaijiaju'},
                                {color: '#77767c', text: '全部分类', icon: 'icon-quanbu'}
                            ].map((val, idx) => (
                                <Flex.Item key={idx}>
                                    <div style={{textAlign:'center',margin:'0 8px'}}>
                                        <div style={{borderRadius:'50%',backgroundColor: val.color,paddingBottom:'100%',height:0,width:'100%',margin:'0 auto'}}>
                                            <i style={{fontSize:30,marginTop:'25%',display:'inline-block',color:'#fff'}} className={`iconfont ${val.icon}`}></i>
                                        </div>
                                        <div style={{marginTop:'10px'}}>{val.text}</div>
                                    </div>
                                </Flex.Item>
                            ))}
                        </Flex>
                    </div>
                </div>
                <Flex style={{background:'#eee'}}>
                    <Flex.Item style={{margin:'16px 8px 8px 16px'}}>
                        <img width='100%' height='100%' src={require('../images/store-d1.png')}/>
                        <p style={{fontSize:'15px',color:'grey',margin:'10px 0'}}>Top Art Studio 欧式风格精细…</p>
                        <p style={{fontSize:'16px',margin:0,padding:0}}>¥ 39.95</p>
                    </Flex.Item>
                    <Flex.Item style={{margin:'16px 16px 8px 8px'}}>
                        <img width='100%' height='100%' src={require('../images/store-d2.png')}/>
                        <p style={{fontSize:'15px',color:'grey',margin:'13px 0 10px 0'}}>顺顺工艺欧式风格塑料外框黑…</p>
                        <p style={{fontSize:'16px',margin:0,padding:0}}>¥ 83.99</p>
                    </Flex.Item>
                </Flex>
                <div style={{backgroundColor:'#fff',margin:'0 16px'}}>
                    <img width='100%' height='100%' src={require('../images/store-d3.png')}/>
                </div>
            </div>
        )
    }
}

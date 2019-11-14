import React, { Component } from 'react';
import { NavBar, Carousel, Flex} from 'antd-mobile';
import './Home.css';

export default class Seize extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#fff' }}
                >住吧家居</NavBar>

                <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{ height: 3, width: 20, borderRadius: 0 }}
                    dotActiveStyle={{ height: 3, width: 20, borderRadius: 0, backgroundColor: '#3fcccb' }}
                >
                    {[1, 2].map(val => (
                        <a
                            key={val}

                            style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                            <img
                                src={require('../images/banner-' + val + '.png')}
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
                <div className="flex-container" style={{ backgroundColor: '#eeeeee', paddingTop: '3%', paddingBottom: '3%' }}>
                    <Flex>
                        <Flex.Item style={{ textAlign: 'center',marginLeft:'10px' }}>
                            <div  className='imgbox' data-text={`热门品牌`}>
                                <img width='100%' height='100%' src={require("../images/home-1.png")} />
                            </div>

                        </Flex.Item>
                        <Flex.Item style={{ textAlign: 'center',margin:'0 2px 0 10px'}}>
                            <div className='imgbox' data-text={`私人搭配师`}>
                                <img width='100%' height='100%' src={require("../images/home-2.png")} />
                            </div>
                        </Flex.Item>
                        <Flex.Item style={{ textAlign: 'center',marginRight:'10px' }}>
                            <div className='imgbox' data-text={`选购指南`}>
                                <img width='100%' height='100%' src={require("../images/home-3.png")} />
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
                <div>
                    <p style={{ fontSize: '15px', lineHeight: '20px',borderLeft:'5px solid #3fcccb',paddingLeft:'10px' }}>热门推荐</p>
                    <div style={{position: 'relative'}}> 
                        <img src={require("../images/hot.png")} style={{ width: '100%', height: 'auto' }} />
                        <p style={{position:'absolute',top:'60%', color: '#fff', fontSize: '14px',width:'100%', textAlign: 'center' }}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                    </div>
                </div>
            </div>
        )
    }
}

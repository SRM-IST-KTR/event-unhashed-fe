import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel renderThumbs={ (children) => ""} width={'30%'}>
                <figure className='flex flex-col m-8 border-[16px] rounded-lg carouselBox '>
                    <img 
                    <p>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                </figure>
                <figure className='flex flex-col m-8 border-[16px] rounded-lg carouselBox'>
                    <img src="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s900-c-k-c0x00ffffff-no-rj" className='h-24 '/>
                    <p>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                </figure>
                <figure className='flex flex-col m-8 border-[16px] rounded-lg carouselBox'>
                    <img src="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s900-c-k-c0x00ffffff-no-rj" className='h-24 '/>
                    <p>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                </figure>
            </Carousel>
        );
}
}
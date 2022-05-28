import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel renderThumbs={ (children) => ""} width={"30%"} className="">
                <figure className='flex flex-col m-8 gradientBox bg-[#FFF]'>
                <img src="http://levelupcollege.com/wp-content/uploads/2021/10/codedamn-logo-with-text-1.png" alt="GCSRM Logo" className="h-32" />
                    <p className='m-8 text-xl font-semibold'>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                    <a target='_blank' rel="noreferrer" href='https://codedamn.com/' className='my-2 text-buttontext text-base font-extrabold'>Want to learn more!</a>
                </figure>
                <figure className='flex flex-col m-8 border-[16px] rounded-lg carouselBox'>
                    <img src="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s900-c-k-c0x00ffffff-no-rj" className='h-48 ' alt='logo'/>
                    <p>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                </figure>
                <figure className='flex flex-col m-8 border-[16px] rounded-lg carouselBox'>
                    <img src="https://yt3.ggpht.com/QQxn6hSdStL-VcuX_etPIbukeFXe0YIRZmGLz0wQ1f5e_OMViLxE2x9ZVpeFeMVJA3B34oy4zA=s900-c-k-c0x00ffffff-no-rj" className='h-48 ' alt='logo'/>
                    <p>
                    Build projects, practice and learn to code from scratch - without leaving your browser.
                    </p>
                </figure>
            </Carousel>
        );
}
}
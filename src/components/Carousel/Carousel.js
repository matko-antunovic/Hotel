import React, { Component } from "react";
import "./Carousel.scss";
import ImageSlide from "../ImageSlide/ImageSlide";
import Arrow from "../Arrow/Arrow";
import Thumbnail from "../Thumbnail/Thumbnail"

class Carousel extends Component {

  state = {
    currentImageIndex: 0,
  }  
  handleClick=(im)=>{
  this.setState=({
      currentImageIndex:im
    });
    console.log("KLIKNUTO",im)
    console.log("STATE U FUNK",this.state.currentImageIndex)
  }
 

  nextSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };

  previousSlide = () => {
    const lastIndex = this.props.images.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index,
    });
  };


  render() {
    return (
      <React.Fragment>
      <div className="carousel">
        <Arrow
          direction="left"
          handleClick={this.previousSlide}
          glyph="&#60;"
        />
        <ImageSlide src={this.props.images[this.state.currentImageIndex]} />
        <Arrow
          direction="right"
          handleClick={this.nextSlide}
          glyph="&#62;"
          index={this.state.currentImageIndex}
        />
        </div>
        <Thumbnail handleClick={this.handleClick} images={this.props.images} index={this.state.currentImageIndex}/>
        </React.Fragment>
    );
  }
}
export default Carousel;

// import React,{Component} from "react";
// const imgUrls = [
// 	"https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
// 	"https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
// 	"https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
// 	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
// 	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
// ];

// class Carousel extends React.Component {

// 		state = {
// 			currentImageIndex: 0
// 		};

// 	}

// 	previousSlide () {
// 		const lastIndex = imgUrls.length - 1;
// 		const { currentImageIndex } = this.state;
// 		const shouldResetIndex = currentImageIndex === 0;
// 		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

// 		this.setState({
// 			currentImageIndex: index
// 		});
// 	}

// 	nextSlide () {
// 		const lastIndex = imgUrls.length - 1;
// 		const { currentImageIndex } = this.state;
// 		const shouldResetIndex = currentImageIndex === lastIndex;
// 		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

// 		this.setState({
// 			currentImageIndex: index
// 		});
// 	}

// 	render () {
// 		return (
// 			<div className="carousel">
// 				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
// 				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
// 				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
// 			</div>
// 		);
// 	}
// export default Carousel;

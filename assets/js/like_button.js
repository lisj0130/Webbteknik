'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    // Bestäm vilken bild som ska visas beroende på om knappen är klickad eller inte
    const imagePath = this.state.liked ? '/assets/images/heart_filled.png' : '/assets/images/heart_empty.png';

    // Stil för bilderna
    const imageStyle = {
      width: '20px', // Ange önskad bredd
      height: '20px', // Ange önskad höjd
      cursor: 'pointer', // Gör pekaren till en hand när man hovrar över bilden
    };

    return (
      e(
        'img',
        { src: imagePath, onClick: this.handleClick, alt: 'Heart', style: imageStyle }
      )
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

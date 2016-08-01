import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Presentations } from '../api/main';

class App extends Component {
  _canAdvance() {
    const { presentation } = this.props;
    return presentation.slides.length - 1 > presentation.currentSlide;
  };

  _canReverse() {
    const { presentation } = this.props;
    return presentation.currentSlide > 0;
  }

  render() {
    const { dataIsReady, presentation } = this.props;
    const slidesLength = dataIsReady ? presentation.slides.length : 0;
    const slidesStyle = {
      width: `${slidesLength * 100}vw`,
      transform: `translateX(-${presentation.currentSlide * 100}vw)`
    };

    if (!dataIsReady) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <div className="slides" style={slidesStyle}>
          {presentation.slides.map((slide, i) =>
            <div className="slide" key={i}>
              {slide}
            </div>
          )}
        </div>
        <div className="slides__meta">
          <div className="slides__label">
            Slide {presentation.currentSlide + 1} / {slidesLength}
          </div>
          <div className="slides__actions">
            <button
              onClick={this.handlePrevSlide.bind(this)}
              disabled={!this._canReverse()}>
              Prev
            </button>
            <button
              onClick={this.handleNextSlide.bind(this)}
              disabled={!this._canAdvance()}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleNextSlide() {
    const { presentation } = this.props;
    if (this._canAdvance()) {
      Presentations.update(presentation._id, {
        $inc: { currentSlide: 1 }
      });
    }
  }

  handlePrevSlide() {
    const { presentation } = this.props;
    if (this._canReverse()) {
      Presentations.update(presentation._id, {
        $inc: { currentSlide: -1 }
      });
    }
  }
}

export default createContainer(() => {
  const dataHandle = Presentations.findOne();
  const dataIsReady = dataHandle;
  return {
    dataIsReady,
    presentation: dataIsReady ? Presentations.findOne() : [],
  };
}, App);

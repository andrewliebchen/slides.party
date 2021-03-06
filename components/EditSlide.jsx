import React, { Component, PropTypes } from 'react';
import Overlay from './Overlay.jsx';
import SlideForm from './SlideForm.jsx';
import SlideAction from './SlideAction.jsx';
import { Spinner } from './Loader.jsx';

export default class EditSlide extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.state = {
      overlay: false,
      type: this.props.slide.type,
      source: this.props.slide.source,
      isLoading: false
    };
  }

  render() {
    const { overlay, type, source, isLoading } = this.state;
    return (
      <span>
        <SlideAction
          handleClick={this.handleToggleEditSlide.bind(this)}
          tip="edit"
          type="edit"/>
        <Overlay
          show={overlay}
          toggle={this.handleToggleEditSlide.bind(this)}>
          <SlideForm
            tabChange={this.handleChangeTab}
            sourceChange={this.handleSourceChange}
            defaultType={type}
            defaultSource={source}
            primaryClick={this.handleSaveSlide.bind(this)}
            primaryLabel={isLoading ? <Spinner spinnerName="three-bounce" noFadeIn/> : 'Save slide'}
            secondaryClick={this.handleToggleEditSlide.bind(this)}
            secondaryLabel="Cancel"/>
        </Overlay>
      </span>
    );
  }

  handleToggleEditSlide() {
    this.setState({overlay: !this.state.overlay});
  }

  handleChangeTab(selectedIndex) {
    this.setState({type: selectedIndex === 1 ? 'image' : 'text'});
  }

  handleSourceChange(event) {
    this.setState({source: event.target.value});
  }

  handleSaveSlide() {
    const { type, source } = this.state;
    this.setState({isLoading: true});
    Meteor.call('updateSlide', {
      id: this.props.slide._id,
      type: type,
      source: source
    }, (error, success) => {
      if (success) {
        this.setState({
          overlay: false,
          isLoading: false
        });
      }
    });
  }
}

EditSlide.propTypes = {
  slide: PropTypes.object
};

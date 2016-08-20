import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import keydown from 'react-keydown';
import { Presentations } from '../api/main';
import Spinner from 'react-spinkit';
import Icon from './Icons.jsx';
import Overlay from './Overlay.jsx';
import SlideForm from './SlideForm.jsx';

class NewSlide extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleSourceChange = this.handleSourceChange.bind(this);
    this.state = {
      overlay: false,
      type: 'image',
      source: null,
      isLoading: false
    };
  }

  componentWillReceiveProps({ keydown }) {
    if (keydown.event && keydown.event.which === 27) {
      this.setState({overlay: false});
    }
  }

  render() {
    const { overlay, type, source, isLoading } = this.state;
    return (
      <div className="admin__slide__container">
        <div
          className="new-slide-toggle admin__slide"
          onClick={this.handleToggleNewSlide.bind(this)}>
          <span className="new-slide-toggle__label">
            <Icon type="plus" size="2rem"/>
          </span>
        </div>
        <Overlay
          show={overlay}
          toggle={this.handleToggleNewSlide.bind(this)}>
          <SlideForm
            tabChange={this.handleChangeTab}
            sourceChange={this.handleSourceChange}/>
          <button
            className="button"
            onClick={this.handleAddSlide.bind(this, true)}>
            {isLoading ? <Spinner spinnerName="three-bounce" noFadeIn/> : 'Add slide'}
          </button>
          <a
            className="new-slide__secondary"
            onClick={this.handleAddSlide.bind(this, false)}>
            Add slide and close
          </a>
        </Overlay>
      </div>
    );
  }

  handleToggleNewSlide() {
    this.setState({overlay: !this.state.overlay});
  }

  handleChangeTab(selectedIndex) {
    this.setState({type: selectedIndex === 1 ? 'image' : 'text'});
  }

  handleSourceChange(event) {
    this.setState({source: event.target.value});
  }

  handleAddSlide(keepOpen) {
    const { type, source } = this.state;
    if (source) {
      this.setState({isLoading: true});
      Meteor.call('createSlide', {
        presentation: this.props.presentation._id,
        type: type,
        source: source
      }, (error, success) => {
        if (success) {
          if (keepOpen) {
            this.setState({isLoading: false});
            // this.refs.source.value = '';
            // this.refs.source.focus();
          } else {
            this.setState({
              overlay: false,
              isLoading: false
            });
          }
        }
      });
    }
  }
}

NewSlide.propTypes = {
  presentation: PropTypes.object
};

export default keydown(NewSlide);

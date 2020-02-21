import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : '이름';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

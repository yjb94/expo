import React from 'react';

import ExpoKeepAwake from './ExpoKeepAwake';

export default class KeepAwake extends React.PureComponent {
  static activate = activate;
  static deactivate = deactivate;

  componentDidMount() {
    ExpoKeepAwake.activate();
  }

  componentWillUnmount() {
    ExpoKeepAwake.deactivate();
  }

  render() {
    return null;
  }
}

export function activate() {
  ExpoKeepAwake.activate();
}

export function deactivate() {
  ExpoKeepAwake.deactivate();
}

import React from 'react';
import withSecretToLife from './withSecretToLife';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secretToLife.id}.We got it HOC.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;
import React from 'react';

export function Maybe(props) {
  const { fallback, children } = props;
  if (!children) {
    return fallback;
  }

  return children;
}

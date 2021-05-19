import { waitForElementToBeRemoved } from '@testing-library/dom';
import React from 'react';

export default function Footer() {
  return (
    <footer className="flex-bottom zindex-fixed" style={{ textAlign: 'center' }}>
      <p classname="font-weight-bold">
        &#169; The Code Shinobi
      </p>
    </footer>
  );
}

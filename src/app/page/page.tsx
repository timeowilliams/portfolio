import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  // If you dont want to include the template
  //   title: { absolute: 'About' },
  // robots: {
  //   index: false, // don't want the page to show up on google
  //   follow: true, // will allow crawler to follow the links and index the page
  // },
};
export default function Page() {
  return <div>Page</div>;
}

import styled from 'styled-components';
import ogImage from '../../assets/images/OG-save-the-date.jpg';

import path from 'path';

/* eslint-disable-next-line */
export interface OpenGraphProps {}

export function OpenGraph(props: OpenGraphProps) {
  return (
    <>
      <meta
        property="og:title"
        content="Save the Date! 6/11/2022 | Emily & Mitchell"
      />
      <meta
        property="og:description"
        content="Mark your calendars for June 11, 2022. Emily and Mitchell can't wait to celebrate with you!"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="http://savethedate.emilyandmitchell.com"
      />
      <meta
        property="og:image"
        itemProp="image"
        content={path.join(`OG-save-the-date.jpg`)}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </>
  );
}

export default OpenGraph;

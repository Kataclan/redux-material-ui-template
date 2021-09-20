import React from 'react';
import { SvgIcon as Svg } from '@mui/material';
import { SvgDisabledProps as SvgProps } from '../types';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 398 312" {...props}>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="paint0_linear"
        x1="268.871"
        y1="-85.491"
        x2="49.2049"
        y2="335.258"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="paint1_linear"
        x1="268.871"
        y1="-85.491"
        x2="49.2049"
        y2="335.258"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        xmlns="http://www.w3.org/2000/svg"
        id="paint2_linear"
        x1="268.871"
        y1="-85.491"
        x2="49.2049"
        y2="335.258"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <path
        d="M64.6319 237.918C67.0654 235.486 70.3646 234.12 73.8046 234.12H391.202C396.984 234.12 399.878 241.112 395.788 245.199L333.071 307.866C330.638 310.298 327.339 311.663 323.899 311.663H6.50115C0.71916 311.663 -2.17529 304.672 1.91482 300.585L64.6319 237.918Z"
        fill={props.disabled ? '#8d8d8d' : 'url(#paint0_linear)'}
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M64.6319 3.7973C67.0654 1.36583 70.3646 0 73.8046 0H391.202C396.984 0 399.878 6.99174 395.788 11.0786L333.071 73.7458C330.638 76.1772 327.339 77.5431 323.899 77.5431H6.50115C0.71916 77.5431 -2.17529 70.5513 1.91482 66.4645L64.6319 3.7973Z"
        fill={props.disabled ? '#8d8d8d' : 'url(#paint1_linear)'}
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M333.071 120.112C330.638 117.68 327.339 116.315 323.899 116.315H6.50115C0.719158 116.315 -2.17529 123.306 1.91482 127.393L64.6319 190.06C67.0653 192.492 70.3646 193.858 73.8046 193.858H391.202C396.984 193.858 399.878 186.866 395.788 182.779L333.071 120.112Z"
        fill={props.disabled ? '#8d8d8d' : 'url(#paint2_linear)'}
      />
    </Svg>
  );
};

export default Icon;

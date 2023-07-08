import { SVGProps, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill={props.color ? props.color : '#fff'}
        d="m13.4 12 4.3-4.3a1 1 0 1 0-1.4-1.4L12 10.6 7.7 6.3a1 1 0 0 0-1.4 1.4l4.3 4.3-4.3 4.3A1 1 0 0 0 7 18a1 1 0 0 0 .7-.3l4.3-4.3 4.3 4.3a1 1 0 1 0 1.4-1.4L13.4 12Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Close24Icon = memo(SvgComponent)

export default Close24Icon

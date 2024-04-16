import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={65}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M60.2 15.234H45.702V5.078h-4.062v10.156H25.39v4.063h2.275l.781 6.093H14.219A10.168 10.168 0 0 0 4.063 35.547v2.03h35.546v-2.03a10.094 10.094 0 0 0-1.015-4.424 10.187 10.187 0 0 0-5.987-5.229l-.845-6.597h23.82l-4.557 35.546H4.063v4.063H54.6l5.078-39.61h3.29v-4.062H60.2ZM35.198 33.515H8.473a6.104 6.104 0 0 1 5.746-4.062h15.234a6.103 6.103 0 0 1 5.746 4.062Z"
    />
    <Path
      fill="#fff"
      d="M38.594 44.687h1.016v-4.062H4.063v4.062h34.531Zm0 7.11h1.016v-4.063H4.063v4.063h34.531Z"
    />
  </Svg>
)
export default SvgComponent

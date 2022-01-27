import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={ props.width? props.width: 13}
      height={props.height? props.height: 11}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.5 0l2.055 3.388 4.127.758-2.856 2.852.495 3.856L6.5 9.228l-3.82 1.626.494-3.856L.318 4.146l4.127-.758L6.5 0z"
        fill={props.color ? props.color : "white"}
      />
    </Svg>
  );
}

export default SvgComponent;
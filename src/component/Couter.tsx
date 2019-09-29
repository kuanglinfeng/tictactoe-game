import React from 'react'

interface IProps {
  num: number,
  onChange?: (n: number) => void,

}

// FC => function component
let Counter:React.FC<IProps> = (props) => {
  return (
    <div>
      <button onClick={() => {
        if (props.onChange) {
          props.onChange(props.num - 1)
          // 使用React.FC<IProps>  会多出props.children
        }
      }}>-</button>
      <span>{props.num}</span>
      <button onClick={() => {
        if (props.onChange) {
          props.onChange(props.num + 1)
        }
      }}>+</button>
    </div>
  )
}

// interface IState {
//   msg: string,
//   description: string
// }

// class Counter extends React.Component<IProps, IState> {

//   state:IState = {
//     msg: '',
//     description: ''
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={() => {
//           if (this.props.onChange) {
//             this.props.onChange(this.props.num - 1)
//             // 使用React.FC<IProps>  会多出props.children
//           }
//         }}>-</button>
//         <span>{this.props.num}</span>
//         <button onClick={() => {
//           if (this.props.onChange) {
//             this.props.onChange(this.props.num + 1)
//           }
//         }}>+</button>
//     </div>
//     )
//   }
// }

export default Counter
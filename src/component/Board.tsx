import React from 'react'
import { ChessType } from '../types/enums'
import Chess from './Chess'
import './Board.css'
interface IProps {
  chesses: ChessType[],
  // 设置可选属性，为了设置默认值
  isGameOver?: boolean,
  onClick?: (index:number) => void
}

let Board: React.FC<IProps> = (props) => {

  // 类型断言 断言为boolean
  // const isGameOver = props.isGameOver as boolean
  // 非空断言 过滤掉为空的情况
  const isGameOver = props.isGameOver!

  const list = props.chesses.map((type, index) => {
    return (
      <Chess 
      key={index} 
      type={type} 
      onClick={() => {
        if (props.onClick && !isGameOver) {
          props.onClick(index)
        }
      }}/>
    )
  })
  return (
    <div className="board">
      {list}
    </div>
  )
}

Board.defaultProps = {
  // 默认值赋值
  isGameOver: false
}


export default Board
import React from 'react'
import { ChessType } from '../types/enums'
import './Chess.css'

interface IProps {
  type: ChessType,
  onClick?: () => void
}

let Chess = ({ type, onClick }: IProps) => {

  let chess = null

  if (type === ChessType.red) {
    chess = <div className='chess-item red'></div>
  }
  if (type === ChessType.black) {
    chess = <div className='chess-item black'></div>
  }

  return (
    <div className="chess" onClick={() => {
      if (type === ChessType.none && onClick) {
        // 怎么处理 上一级来搞
        onClick()
      }
    }}>
      {chess}
    </div>
  )
}

export default Chess


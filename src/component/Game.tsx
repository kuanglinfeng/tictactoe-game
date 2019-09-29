import React from 'react'
import { ChessType, GameStatus } from '../types/enums'
import Board from './Board'
import StatusTip from './StatusTip'

interface IState {
  chesses: ChessType[],
  gameStatus: GameStatus,
  nextChess: ChessType.red | ChessType.black
}

class Game extends React.Component<{}, IState> {

  state: IState = {
    chesses: [],
    gameStatus: GameStatus.gaming,
    nextChess: ChessType.black
  }


  componentDidMount() {
    this.init()
  }

  /**
   * 初始化数据
   */
  init() {
    const arr:ChessType[] = []
    for (let i = 0; i < 9; i++) {
      arr.push(ChessType.none)
    }
    this.setState({
      chesses: arr,
      gameStatus: GameStatus.gaming,
      nextChess: ChessType.black
    })
  }

  /**
   * 处理棋子的点击事件
   * 如果该函数运行 说明 游戏没有结束 点击的位置没有棋子
   * @param index 
   */
  handleChessClick(index:number) {
    const chesses: ChessType[] = [...this.state.chesses]
    chesses[index] = this.state.nextChess
    this.setState(prevState => ({
      chesses: chesses,
      nextChess: prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
      gameStatus: this.getStatus(chesses, index)
    }))
  }

  getStatus(chesses:ChessType[], index:number): GameStatus {
    // 1、通过落子，判断一方是否胜利
    // 横向判断
    const horMin = Math.floor(index / 3) * 3
    // 纵向判断
    const verMin = index % 3
    if (chesses[horMin] === chesses[horMin + 1] && chesses[horMin + 1] === chesses[horMin + 2] || 
        chesses[verMin] === chesses[verMin + 3] && chesses[verMin + 3] === chesses[verMin + 6] ||
        chesses[0] === chesses[4] && chesses[4] === chesses[8] && chesses[0] !== ChessType.none ||
        chesses[2] === chesses[4] && chesses[4] === chesses[6] && chesses[2] !== ChessType.none  
      ) {
      if (chesses[index] === ChessType.red) {
        return GameStatus.redWin
      } else { 
        return GameStatus.blackWin
      }
    }
    // 2、判断是否平局
    if (!chesses.includes(ChessType.none)) {
      return GameStatus.equal
    }
    // 3、游戏继续进行
    return GameStatus.gaming
  }

  render() {
    return (
      <div className="game">
        <h1>井字棋游戏</h1>
        <StatusTip
          status={this.state.gameStatus}
          next={this.state.nextChess}
        />
        <Board 
          chesses={this.state.chesses}
          isGameOver={this.state.gameStatus !== GameStatus.gaming}
          onClick={this.handleChessClick.bind(this)}
        />
        <button onClick={() => {this.init()}}>重新开始</button>
      </div>
    )
  }
}




export default Game
# 使用TS + TypeScript开发井字棋游戏

预览地址：https://kuanglinfeng.github.io/tictactoe-game/

# JavaScript 的问题

1. 每个属性需要传递的类型

2. 传递事件有哪些参数，参数是哪些类型

3. 错误发生在运行时

> 虽然在React中，可以通过Props-Type来约束属性的类型，但是就算错了，也只能在运行时发现错误

# 使用React + TypeScript 

注意点：

非空断言：在数据之后加上```!```，告诉TS，不用考虑数据为空的情况

游戏组件：提供并维护游戏中的数据，有状态组件


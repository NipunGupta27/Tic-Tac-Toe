import React from 'react'

const Log = ({logs}) => {
    // let data = [];
    // for (const log of logs){
    //     const {square, player} = log;
    //     const {row, col} = square;
    //     data = [{row:row, col:col, player:player}, ...data];
    // } coz dont really need to do this
  return (
    <div>
        {logs.map(item=><li key={`${item.square.row}${item.square.col}`}>
            {`Player ${item.player} played ${item.square.row}, ${item.square.col}`}
        </li>)}
    </div>
  )
}

export default Log
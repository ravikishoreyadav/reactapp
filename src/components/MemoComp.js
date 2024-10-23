import React from 'react'

function MemoComp({name}) {
  console.log("Memo");
  return (
    <div>Memo Component {name}</div>
  )
}

export default React.memo(MemoComp)
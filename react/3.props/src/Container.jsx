import React from 'react'

export default function Container({children}) {
  return (
    <div>
        <div>Container:</div>
        <div>{children}</div>
    </div>
  )
}

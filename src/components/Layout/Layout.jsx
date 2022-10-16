import React from 'react'

export default function Layout(props) {
  const { children } = props

  return (
    <div className='container'>
      {children}
    </div>
  )
}

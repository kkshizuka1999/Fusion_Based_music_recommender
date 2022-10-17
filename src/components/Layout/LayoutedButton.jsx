import React from 'react'

const LayoutedButton = ({ info }) => {
  return (
    <button type="button" className="rounded-pill">
      {info}
    </button>
  )
}

export default LayoutedButton

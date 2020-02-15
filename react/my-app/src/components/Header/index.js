import React from 'react'
import propTypes from 'prop-types'

export default function Header(props) {
  return (
    <>
    <h2>
      {props.children}
    </h2>
    <h3>
      {props.desc}
    </h3>
    </>
  )
}

Header.propTypes={
  desc:propTypes.string.isRequired
}


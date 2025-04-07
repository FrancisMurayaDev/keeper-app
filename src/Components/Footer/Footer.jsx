import React from 'react'
import "./Footer.css"

function Footer() {
const date = new Date();
const year = date.getFullYear();

  return (
    <footer>
      <a href=""><p> @francismurayadev {year}</p></a>
    </footer>
  )
}

export default Footer

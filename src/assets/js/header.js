// window.onscroll = function() {scrollHeader()};

// function scrollHeader() {
//   if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
//     document.getElementById("navbarNav").className = "collapse navbar-collapse scroll-bg";
//   } else {
//     document.getElementById("navbarNav").className = "collapse navbar-collapse";
//   }
// }

import React from "react"
import classes from "../css/manual/pages/test.moduel.css"


const Test = () => {
  
  return <div className={`${classes.Title} ${classes.Test}`}></div>
  return <div className={[classes.Title,classes.Test].join(" ")}></div>
}

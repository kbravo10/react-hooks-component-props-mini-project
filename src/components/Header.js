import React from "react";

function Header({name}){
    console.log(name)
    return(
        <header>
          {name}
        </header>
    )
}

export default Header;
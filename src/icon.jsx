import React from "react";
import { ReactComponent as Logo } from "./icon/logo.svg";
import { ReactComponent as Calc } from "./icon/calc.svg";
import {ReactComponent as Man} from "./icon/man.svg"
import {ReactComponent as Phone} from "./icon/phone.svg"

export const Icon = ({name,className,size})=>{
    if (name=== "logo"){
        return <Logo className={className} width='129.985px' height='60px'/>
    }
    if (name=== "calc"){
        return <Calc className={className} width='12.57px' height='16px'/>
    }
    if (name=== "man"){
        return <Man className={className} width='12.794px' height='15px'/>
    }
    if (name=== "phone"){
        return <Phone className={className} width='15' height='15px'/>
    }
}
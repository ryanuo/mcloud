/*
 * @Author: Harry
 * @Date: 2022-08-08 13:47:17
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-09 22:19:19
 * @FilePath: \cloudm\src\components\menuitem\MenuItem.jsx
 */
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MenuContext from '../../store/menu-context'

import classes from './index.module.scss'
// export default class MenuItem extends React.Component {
//     constructor(props) {
//         super(props);
//         // console.log(props);
//         this.state = {
//             label: props.label,
//             path: props.path,
//             icon: props.icon,
//             isactived: props.isactived
//         };
//     }
//     updateActived = () => {
//         console.log(this.props.isactived);
//         this.setState({
//             isactived: this.state.isactived
//         })
//     }
//     componentDidUpdate(){
//         console.log(1)
//     }
//     render() {
//         return (
//             <div data-path={this.state.path} className={this.state.isactived ? classes.MenuItem + ' ' + classes.isactived : classes.MenuItem}>
//                 < span className={classes.Icon} > {this.state.icon}</span >
//                 <span>{this.state.label}</span>
//             </div >
//         )
//     }
// }
export default function MenuItem(props) {
    const ctx = useContext(MenuContext)
    console.log()
    return (
        <div onClick={() => ctx.clickPend(props.path)} data-path={props.path} className={props.isactived ? classes.MenuItem + ' ' + classes.isactived : classes.MenuItem}>
            < span className={classes.Icon} > {props.icon}</span >
            <span>{props.label}</span>
        </div >
    )
}

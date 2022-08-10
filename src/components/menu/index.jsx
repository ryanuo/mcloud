/*
 * @Author: Harry
 * @Date: 2022-08-08 13:20:18
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-08-09 22:33:29
 * @FilePath: \cloudm\src\components\menu\index.jsx
 */
import React, { useEffect, useState } from 'react'
import MenuItem from '@/components/menuitem/MenuItem'
import classes from './index.module.scss'
// export default class Meun extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(props);
//         this.state = {
//             data: [],
//             label: props.label
//         };
//     }

//     render() {
//         return (
//             <div className={classes.Meun}>
//                 <div className={classes.Label}>{this.state.label}</div>
//                 {this.state.data.map(v => <MenuItem icon={v.icon} isactived={v.isactived} key={v.idx} label={v.label} path={v.path}></MenuItem>)}
//             </div >
//         )
//     }
// }
export default function Meun(props) {
    const [itemList, setNewItemList] = useState(props.children)
    useEffect(()=>{
        // setNewItemList(props.children);
        console.log(1)
    },[props])
    return (
        <div className={classes.Meun}>
            <div className={classes.Label}>{props.label}</div>
            {itemList.map(v => <MenuItem icon={v.icon} isactived={v.isactived} key={v.idx} label={v.label} path={v.path}></MenuItem>)}
        </div >
    )
}

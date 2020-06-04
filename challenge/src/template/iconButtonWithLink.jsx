import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <a href={props.href} className={'btn btn-' + props.style}>
            <i className={'fa fa-' + props.icon}></i>
        </a>
    </If>
)
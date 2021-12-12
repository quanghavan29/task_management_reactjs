import React from 'react'

export default function Detail(props) {
    return (
        <div>
            Value Props Match: {props.match.params.id}
        </div>
    )
}

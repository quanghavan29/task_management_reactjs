import React from 'react'

export default function NotFound(props) {
    return (
        <div>
            Error 404! - {props.match.url}
        </div>
    )
}

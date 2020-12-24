import React from 'react';
import Link from "next/link";

const FristPost = () => {
    return(
        <React.Fragment>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </React.Fragment>
    )
}

export default FristPost;

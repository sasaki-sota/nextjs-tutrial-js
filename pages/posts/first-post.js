import React from 'react';
import Link from "next/link";
import Head from "next/head";

const FirstPost = () => {
    return(
        <React.Fragment>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </React.Fragment>
    )
}

export default FirstPost;

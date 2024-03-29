import { getAllScribbles, getWishlistContent } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";

export default function Wishlist({ mdxSource }) {
    return (
        <main>
            <Head>
                <title>
                    Wishlist | Vignesh Marimuthu
                </title>
                <meta
                    name="description"
                    content="This is my wishlist of things that I wanted to buy. Use this to buy me gifts instead of getting me the same old photo frame"
                    key="desc"
                />
                <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
                <meta property="og:image" content="https://vigneshmarimuthu.com/logo512.png"></meta>
                <meta name="twitter:card" content="summary" />
            </Head>
            <div className="bookScreen superPadding fullScreen">
                <div className="colorPrimary paddingVertical  homeLink">
                    <div className="space"></div>
                    <p>
                        <Link href="/">VIGNESH MARIMUTHU </Link> /
                        <Link href="/personal"> PERSONAL </Link> /
                    </p>
                    <div className="bottomLine"> </div>
                    <div className="space"></div>
                    <div className="space"></div>
                </div>
                <div className="content paddingVertical ">
                    <MDXRemote {...mdxSource}></MDXRemote>
                </div>
            </div>
        </main>
    );

}

export async function getStaticProps() {
    const wishList = await getWishlistContent()
    return wishList;
}
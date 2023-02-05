import { getAllPaths, getContentBySlug } from "@/utils/mdx";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { language } from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
    const allPaths = await getAllPaths()
    return allPaths
}

export async function getStaticProps({ params: { slug } }) {
    const contentValue = await getContentBySlug({ slug: slug })
    return contentValue
}

export default function Scribble({ frontmatter, mdxSource }) {
    const router = useRouter()
    const href = router.pathname
    const url = router.basePath
    const twitterShareUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url + href)
    const linkedInShareUrl = "https://www.linkedin.com/sharing/share-offsite/?mini=true&url=" + encodeURIComponent(url + href)

    return (
        <div>
            <Head>
                <title>
                    {frontmatter.title} | Vignesh Marimuthu
                </title>
                <meta
                    name="description"
                    content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for"
                    key="desc"
                />
                <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
                <meta property="og:image" content="https://vigneshmarimuthu.com/logo512.png"></meta>

            </Head>

            <div className="bookScreen superPaddingArticle fullScreen">
                <div className="colorPrimary paddingVertical  homeLink">
                    <div className="space"></div>
                    <div className="space"></div>
                    <p>
                        <Link href="/">VIGNESH MARIMUTHU </Link> /
                        <Link href="/personal"> PERSONAL </Link> /
                        <Link href="/personal/scribbles"> SCRIBBLES </Link> /
                    </p>
                    <div className="bottomLine"> </div>
                </div>

                <div className="bottomLine">
                    <div className="space"></div>
                    <h1
                        className="superTitlePrimary colorSecondary "
                        data-text="Vignesh Marimuthu"
                    >{frontmatter.title}
                    </h1>
                    <div className="flex">
                        <p>
                            Vignesh Marimuthu |  <span className="highlight colorSecondary">{frontmatter.date}</span>
                        </p>
                    </div>
                    <div className="space"></div>
                </div>

                <ScribbleContent frontmatter={frontmatter} mdxSource={mdxSource} />
                <div className="bottomLine"> </div>

                <div className="flex flex-ai-c">
                    <p>
                        Share on
                    </p>

                    <div className="flex">
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            data-size="large"
                            href={twitterShareUrl}
                        >
                            <FontAwesomeIcon
                                className="socialIcon"
                                icon={faTwitter}
                            />
                        </Link>
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            data-size="large"
                            href={linkedInShareUrl}
                        >
                            <FontAwesomeIcon
                                className="socialIcon"
                                icon={faLinkedin}
                            />
                        </Link>
                    </div>
                </div>

                {/* 
                <div className="scribbleContent contentTamil padding25">
                    <MDXRemote {...mdxSource}></MDXRemote>
                </div> */}
            </div>
        </div>
    );
}

export function ScribbleContent({ frontmatter, mdxSource }) {
    if (frontmatter.language == 'tamil') {
        return (
            <div className="scribbleContent contentTamil ">

                <div className="space"></div>

                <MDXRemote {...mdxSource}></MDXRemote>

                <div className="space"></div>

            </div>)
    } else {
        return (
            <div className="scribbleContent content">
                <div className="space"></div>

                <MDXRemote {...mdxSource}></MDXRemote>
                <div className="space"></div>
            </div>)
    }
}
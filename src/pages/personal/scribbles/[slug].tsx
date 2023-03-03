import { getAllPaths, getContentBySlug } from "@/utils/mdx";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

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
    const href = router.asPath
    const url = 'https://vigneshmarimuthu.com'
    const fullUrl = url + href
    const twitterShareUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(fullUrl)
    const linkedInShareUrl = "https://www.linkedin.com/sharing/share-offsite/?mini=true&url=" + encodeURIComponent(fullUrl)
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
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content= {frontmatter.title} />
                <meta name="twitter:description" content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for" />
                <meta name="twitter:image" content="https://vigneshmarimuthu.com/logo512.png" />

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
                <div className="space"></div>

                <div className="flex flex-ai-c">
                    <p>Share on </p>
                    <div className="flex">
                        <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            data-size="large"
                            href={twitterShareUrl}
                        >
                            <FontAwesomeIcon
                                className="shareSocialIcon"
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
                                className="shareSocialIcon"
                                icon={faLinkedinIn}
                            />
                        </Link>

                        <a>
                            <FontAwesomeIcon
                                className="shareSocialIcon copyLink"
                                icon={faChain}
                                onClick={() => copyToClipBoard({fullUrl: fullUrl})}
                            />
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
}

function copyToClipBoard({fullUrl}){
    navigator.clipboard.writeText(fullUrl)
    toast("Copied to clipboard")
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
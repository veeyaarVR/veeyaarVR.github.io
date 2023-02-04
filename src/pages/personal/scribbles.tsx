
import { getAllScribbles, getAllScribblesByTag } from "../../utils/mdx"
import Link from "next/link"
import Head from "next/head";

export default function Scribbles({ scribbles }) {
    return (
        <main>
            <Head>
                <title>
                    Scribbles | Vignesh Marimuthu
                </title>
                <meta
                    name="description"
                    content="This is my personal blog which tells a lot about who I am and my opinions, that nobody asked for"
                    key="desc"
                />
                <meta name="image" content="https://vigneshmarimuthu.com/logo512.png" />
                <meta property="og:image" content="https://vigneshmarimuthu.com/logo512.png"></meta>
            </Head>

            <div className="blog superPadding fullScreen">
                <div className="colorPrimary paddingVertical  homeLink">
                    <div className="space"></div>
                    <div className="space"></div>
                    <p>
                        <Link href="/"> VIGNESH MARIMUTHU </Link> /<Link href="/personal"> PERSONAL </Link>{" "}
                        /
                    </p>
                    <div className="bottomLine"> </div>
                </div>
                <HeaderSection />
                <ScribbleList scribbles={scribbles} />
            </div>
        </main>
    );
}

function HeaderSection() {
    return (
        <div>
            <div className="space"></div>
            <div className="superTitlePrimary colorSecondary">Scribbles</div>
            <div className="subHeadingSecondary colorPrimary">
                You can find my two cents, opinions, small stories, whatever I want to
                say here and I call these as scribbles
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="bottomLine"> </div>
            <div className="space"></div>
        </div>
    );
}

function ScribbleList({ scribbles }) {
    return (
        <div>
            {scribbles.map((post, index) => (
                <div
                    className="scribblesList subHeadingSecondary textColor"
                    key={post.slug}
                >
                    <Link
                        href={{ pathname: `/personal/scribbles/${post.slug}` }}
                        key={post.slug}
                    >
                        <div className="scribbleItem">
                            • {post.frontmatter.title} | {post.frontmatter.date}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

function formatDate(date: Date) {
    let d = new Date(date);
    const options = { year: "numeric", month: "short", day: "numeric" };
    // const dateTimeFormat = new Intl.DateTimeFormat("en-US", options | undefined);
    // console.log(dateTimeFormat.format(d));
    // return dateTimeFormat.format(d);
}

export async function getStaticProps() {
    const scribbles = await getAllScribbles()
    return scribbles;
}

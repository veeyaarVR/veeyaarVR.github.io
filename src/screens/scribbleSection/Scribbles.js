import SCRIBBLES_QUERY from "../../queries/scribbles";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

export default function Scribble() {
    return (
        <div className="blog superPadding fullScreen">
            <div className="colorPrimary paddingVertical  homeLink">
                <div className="space"></div>
                <div className="space"></div>
                <p>
                    <a href="/">VIGNESH MARIMUTHU </a> /
                    <a href="/personal"> PERSONAL </a> /
                </p>
                <div className="bottomLine"> </div>
            </div>
            <HeaderSection />
            <ScribbleList />
        </div>
    );
}

function HeaderSection() {
    return (
        <div>
            <div className="space"></div>
            <div className="superTitlePrimary colorSecondary">Scribbles</div>
            <div className="subHeadingSecondary colorPrimary">
                You can find my two cents, opinions, small stories, whatever I want to say here and I call these as scribbles
            </div>
            <div className="space"></div>
            <div className="space"></div>
            <div className="bottomLine"> </div>
            <div className="space"></div>

        </div>
    );
}

function ScribbleList() {
    //Fetch all Scribbles
    const { loading, error, data } = useQuery(SCRIBBLES_QUERY);
    if (loading) {
        return (
            <div className="bookScreen superPadding blog">
                <div className="spinner"></div>
            </div>
        );
    }
    if (error) return `Error! ${error.message}`;
    if (data) {
        return (
            <div>
                {data.scribbles.map((item, index) =>
                    <div className="scribblesList subHeadingSecondary textColor" key={item.slug}>
                        <Link
                            to={{ pathname: `/personal/scribbles/${item.slug}` }}
                            key={item.slug}
                        >
                            <div className="scribbleItem">{item.title} | {formatDate(item.date)}</div>
                        </Link>
                    </div>
                )}
            </div>
        )
    }
}

function formatDate(date) {
    let d = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
    console.log(dateTimeFormat.format(d));
    return dateTimeFormat.format(d);
}
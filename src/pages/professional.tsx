import Link from "next/link";

export default function Professional() {
    return (
        <div className="headerInfo padding25 superPadding">
            <div className="colorPrimary bottomLine homeLink">
                <Link href="/">← VIGNESH MARIMUTHU</Link>
            </div>
            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <h2 className="colorSecondary">About Me</h2>
            <p className="subHeadingPrimary colorPrimary  align-center ">
                Developing android apps for B2B and B2C clients for the past <span className="highlight colorSecondary">4 years</span> and
                developing applications using the amazing cross development platform, <span className="highlight colorSecondary">Flutter</span> for the past <span className="highlight colorSecondary">2 years.</span> Currently based in
                <span className="highlight colorSecondary"> Madurai, TamilNadu </span>
                and would love to discuss on coding, android apps, politics, movies or
                books over a cup of coffee ☕
            </p>
            <Link
                href="mailto: vigneshmarimuthu2302@gmail.com"
                className="personal-link buttonText colorSecondary"
            >
                Contact →
            </Link>
            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <h2 className="colorSecondary">Skills and Tech Stack</h2>

            <div className="skills">
                <div className="skill">
                    <h3 className="titleSecondary  allCaps colorSecondary highlight">
                        Languages
                    </h3>
                    <ul>
                        <li className="subHeadingPrimary colorPrimary">Java, Kotlin</li>
                        <li className="subHeadingPrimary colorPrimary">Dart</li>
                        <li className="subHeadingPrimary colorPrimary">
                            JavaScript, Html, Css
                        </li>
                    </ul>
                </div>

                <div className="skill">
                    <h3 className="titleSecondary allCaps colorSecondary highlight">
                        Framework
                    </h3>
                    <ul>
                        <li className="subHeadingPrimary colorPrimary">Native Android</li>
                        <li className="subHeadingPrimary colorPrimary">Flutter</li>
                        <li className="subHeadingPrimary colorPrimary">React JS</li>
                    </ul>
                </div>

                <div className="skill">
                    <h3 className="titleSecondary allCaps colorSecondary highlight">
                        Tools
                    </h3>
                    <ul>
                        <li className="subHeadingPrimary colorPrimary">
                            Android Studio, VS Code
                        </li>
                        <li className="subHeadingPrimary colorPrimary">
                            GitHub, BitBucket, Jira
                        </li>
                        <li className="subHeadingPrimary colorPrimary">DialogFlow</li>
                    </ul>
                </div>

                <div className="skill">
                    <h3 className="titleSecondary allCaps colorSecondary highlight">
                        Design
                    </h3>
                    <ul>
                        <li className="subHeadingPrimary colorPrimary">Figma, Photoshop</li>
                    </ul>
                </div>
            </div>

            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <h2 className="colorSecondary">Work Experience</h2>
            <div className="space">&nbsp;</div>

            <div className="companyDetails">
                <div className="companyInfo">
                    <div className="subHeadingPrimary colorPrimary">
                        Cumulations Pvt Ltd., Bangalore
                    </div>
                    <div className="dateText colorSecondary companyDate">
                        Jan 2020 - Present
                    </div>
                </div>
                <div className="colorSecondary companyName categoryText ">
                    Android and Flutter Developer
                </div>
                <div className="space">&nbsp;</div>
                <div className="companyInfo">
                    <div className="subHeadingPrimary colorPrimary">
                        Abservetech Pvt Ltd., Madurai
                    </div>
                    <div className="dateText colorSecondary companyDate">
                        Sept 2018 - Dec 2019
                    </div>
                </div>
                <div className="colorSecondary companyName categoryText">
                    Android Developer
                </div>
            </div>

            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
            <div className="space">&nbsp;</div>
        </div>
    );
}

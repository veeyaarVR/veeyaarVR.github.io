import PROJECTS_QUERY from "../queries/projects";
import { useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";

export default function Professional() {
  return (
    <div class="headerInfo padding25 superPadding">
      <div href="#" className="colorPrimary bottomLine homeLink">
        <a href="/">↩ VIGNESH MARIMUTHU</a>
      </div>
      <div className="space">&nbsp;</div>
      <div className="space">&nbsp;</div>
      <h2 className="colorSecondary">About Me</h2>
      <p className="subHeadingPrimary colorPrimary  align-center ">
        Developing android apps for B2B and B2C clients for the past
        <span className="highlight colorSecondary"> 3.5 years </span> and
        developing applications using the amazing cross development platform,
        <span className="highlight colorSecondary"> Flutter </span> for the past
        <span className="highlight colorSecondary"> 2 years. </span>
        Currently based in
        <span className="highlight colorSecondary"> Madurai, TamilNadu </span>
        and would love to discuss on coding, android apps, politics, movies or
        books over a cup of coffee ☕
      </p>
      <a
        href="mailto: vigneshmarimuthu2302@gmail.com"
        className="personal-link buttonText colorSecondary"
      >
        Contact →
      </a>
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
            <li class="subHeadingPrimary colorPrimary">Java, Kotlin</li>
            <li class="subHeadingPrimary colorPrimary">Dart</li>
            <li class="subHeadingPrimary colorPrimary">
              JavaScript, Html, Css
            </li>
          </ul>
        </div>

        <div className="skill">
          <h3 className="titleSecondary allCaps colorSecondary highlight">
            Framework
          </h3>
          <ul>
            <li class="subHeadingPrimary colorPrimary">Native Android</li>
            <li class="subHeadingPrimary colorPrimary">Flutter</li>
            <li class="subHeadingPrimary colorPrimary">React JS</li>
          </ul>
        </div>

        <div className="skill">
          <h3 className="titleSecondary allCaps colorSecondary highlight">
            Tools
          </h3>
          <ul>
            <li class="subHeadingPrimary colorPrimary">
              Android Studio, VS Code
            </li>
            <li class="subHeadingPrimary colorPrimary">
              GitHub, BitBucket, Jira
            </li>
            <li class="subHeadingPrimary colorPrimary">DialogFlow</li>
          </ul>
        </div>

        <div className="skill">
          <h3 className="titleSecondary allCaps colorSecondary highlight">
            Design
          </h3>
          <ul>
            <li class="subHeadingPrimary colorPrimary">Figma, Photoshop</li>
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
      <ProjectsSection />
      <div className="space">&nbsp;</div>
      <div className="space">&nbsp;</div>
    </div>
  );
}

function ProjectsSection() {
  const { loading, error, data } = useQuery(PROJECTS_QUERY);

  if (loading) {
    return (
      <div className="bookScreen superPadding blog">
        <h5 className="colorSecondary">fetching projects. please wait</h5>
        <div className="spinner"></div>
      </div>
    );
  }
  if (error) return `Error! ${error.message}`;
  if (data) {
    return (
      <div>
        <div className="space">&nbsp;</div>
        <div className="space">&nbsp;</div>
        <h2 className="colorSecondary">Projects</h2>
        <div className="projectsContainer">
          <main className="projectsGrid">
            {data.projects.map((item, index) => {
              return <ProjectComponent data={item} />;
            })}
          </main>
        </div>
      </div>
    );
  }
}

function ProjectComponent({ data }) {
  return (
    <div className="projectItem">
      <div className="space">&nbsp;</div>
      <div className="space">&nbsp;</div>

      <div className="subHeadingPrimary colorPrimary allCaps highlight">
        {data.title}
      </div>
      <ReactMarkdown
        className="projectDesc textColor companyDate"
        children={data.content}
      />

      <div className="tagContainer flex flex-jc-start">
        {data.techstack.map((item, index) => {
          return <TagComponent data={item} />;
        })}
      </div>
    </div>
  );
}

function TagComponent({ data }) {
  return (
    <div href="/personal/scribbles" className="tags tagText colorSecondary">
      {data.tagname}
    </div>
  );
}

import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const ExperienceProjects = ({ projs, isDark }) => {
    return (
      <div className="experience-projects">
        {projs ? projs.map((prj, i) => (
          <div key={i} className="experience-proj" style={{ display: 'flex', marginBottom: '20px' }}>
            {prj.videoID &&(
              <div className="video-container">
                <iframe 
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${prj.videoID}?rel=0&controls=0&showinfo=0`}
                  //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={prj.title}
                />
              </div>
            )}
            <div className={isDark ? "description dark-mode-text" : "description"}>
              <h5>{prj.date} : {prj.title}</h5>
              <ul>
                {prj.desc.map((description, index) => (
                  <li className={isDark ? "description dark-mode-text" : "description"} 
                   key={index}>+ {description}</li>
                ))}
              </ul>
              {prj.url && prj.url.includes
                ? <a href={prj.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="fab fa-google-play"></i>View on GooglePlay
                  </a>
                : null}
            </div>
          </div>
        )) : null}
      </div>
    );
  };
  
  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.duration}
        </p>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        <h5 
          className={
            isDark
              ? "experience-text-participated-projects dark-mode-text"
              : "experience-text-participated-projects"
          }
        >
        Participated Projects:
        </h5>
        <ul>
          <ExperienceProjects projs={cardInfo.projs} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}

import React, {useContext} from "react";
import "./Scholarship.scss";
//Import ScholarshipCard component
import ScholarshipCard from "../../components/scholarshipCard/ScholarshipCard";
import {scholarshipSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Scholarship() {
  const {isDark} = useContext(StyleContext);
  if (!scholarshipSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="scholarships">
        <div className="scholarship-main-div">
          <div className="scholarship-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading scholarship-heading"
                  : "heading scholarship-heading"
              }
            >
              {scholarshipSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle scholarship-subtitle"
                  : "subTitle scholarship-subtitle"
              }
            >
              {scholarshipSection.subtitle}
            </p>
          </div>
          <div className="scholarship-cards-div">
            {scholarshipSection.scholarshipsCard.map((card, i) => {
              return (
                <ScholarshipCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

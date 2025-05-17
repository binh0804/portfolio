import React, {useContext} from "react";
import "./Certification.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {certificationSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function Certification() {
  const {isDark} = useContext(StyleContext);
  if (!certificationSection.display) {
    return null;
  }
  return (
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {certificationSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {certificationSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {certificationSection.certificationCards.map((card, i) => {
              return (
                <AchievementCard
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
  );
}

import React from "react";
import SidebarOptions from "../SidebarOptions";

const CovidInfo = () => {
  return (
    <div className="feed">
      <h2 style={{ margin: "0 auto", display: "flex", alignItems: "center" }}>
        <SidebarOptions src="https://www.facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" />
        Covid-19 Information
      </h2>
      <p style={{ fontFamily: "cursive" }}>
        Coronavirus disease (COVID-19) is an infectious disease caused by the
        SARS-CoV-2 virus. Most people infected with the virus will experience
        mild to moderate respiratory illness and recover without requiring
        special treatment. However, some will become seriously ill and require
        medical attention.
        <br />
        <br />
        <img
          src="https://www.fda.gov/files/styles/landscape_16_9_800_x_450/public/Coronavirus%2020COVID-19%2020%20Tests.jpg?itok=n2KLvKJY"
          alt="Cobid"
          width={"100%"}
        />
        <br />
        <br />
        Older people and those with underlying medical conditions like
        cardiovascular disease, diabetes, chronic respiratory disease, or cancer
        are more likely to develop serious illness. Anyone can get sick with
        COVID-19 and become seriously ill or die at any age.The virus can spread
        from an infected person’s mouth or nose in small liquid particles when
        they cough, sneeze, speak, sing or breathe. These particles range from
        larger respiratory droplets to smaller aerosols.
        <br />
        <br />
        <a
          href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
          target="_blank"
          rel="noreferrer"
        >
          Know more ↪
        </a>
        <br />
        <br />
        <img
          src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/71/coronavirus-Information.png"
          alt="Cobid"
          width={"100%"}
        />
        <br />
        The best way to prevent and slow down transmission is to be well
        informed about the disease and how the virus spreads. Protect yourself
        and others from infection by staying at least 1 metre apart from others,
        wearing a properly fitted mask, and washing your hands or using an
        alcohol-based rub frequently. Get vaccinated when it’s your turn and
        follow local guidance. It is important to practice respiratory
        etiquette, for example by coughing into a flexed elbow, and to stay home
        and self-isolate until you recover if you feel unwell.
        <br />
        <br />
        <img
          src="https://cdn.who.int/media/images/default-source/health-topics/coronavirus/social-media-squares/be-smart-inform.tmb-549v.jpg?sfvrsn=f6dbe358_42"
          alt="Cobid"
          width={"100%"}
        />
        <br />
        <br />
        As of now, researchers know that the coronavirus is spread through
        droplets and virus particles released into the air when an infected
        person breathes, talks, laughs, sings, coughs or sneezes. Larger
        droplets may fall to the ground in a few seconds, but tiny infectious
        particles can linger in the air and accumulate in indoor places,
        especially where many people are gathered and there is poor ventilation.
        This is why mask-wearing, hand hygiene and physical distancing are
        essential to preventing COVID-19.
      </p>
    </div>
  );
};

export default CovidInfo;

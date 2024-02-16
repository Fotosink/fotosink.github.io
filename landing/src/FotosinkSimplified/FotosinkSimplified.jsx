import "./FotosinkSimplified.css";
import { ButtonGroupCTA } from "./../ButtonGroupCTA/ButtonGroupCTA";
import { Heading } from 'react-bulma-components';

const title = "Simple, Reliable Cloud Storage";
const subtitle = (
  <span>
    {/*"Fotosink is simple and reliable cloud storage for your photos, videos, documents and everything else "*/}
    {"at a "}<b>fraction </b>{"of the cost of Google Photos or Apple iCloud"}
  </span>
);

export const FotosinkSimplified = ({ className, ...props }) => {
  return (
    <div className={"fotosink-simplified " + className}>
      <div className="banner">
        <div className="components-banner-text">
          <div className="wrapper">
            <Heading weight="light" size="2">{title}</Heading>
            <Heading subtitle>{subtitle}</Heading>
          </div>
          <ButtonGroupCTA/>
        </div>
        <img className="image" src="image0.png"/>
      </div>
    </div>
  );
};

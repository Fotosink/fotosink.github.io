import "./FotosinkSimplified.css";

export const FotosinkSimplified = ({ className, ...props }) => {
  return (
    <div className={"fotosink-simplified " + className}>
      <div className="banner">
        <div className="components-banner-text">
          <div className="wrapper">
            <div className="h-1">
              <div className="h-12">Simple, Reliable Cloud Storage </div>
            </div>
            <div className="p">
              <div className="p2">
                <span>
                  <span className="p-2-span">
                    Fotosink is simple and reliable cloud storage for your
                    photos, videos, documents and everything else
                    <br />
                    at a{" "}
                  </span>
                  <span className="p-2-span2">fraction</span>
                  <span className="p-2-span3">
                    {" "}
                    of the cost of other providers like Google Photos or Apple
                    iCloud.
                  </span>
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="button-group">
            <div className="button">
              <div className="text">Request Access </div>
            </div>
            <div className="button2">
              <div className="text2">Button Title </div>
            </div>
          </div>
        </div>
        <img className="image" src="image0.png" style={{opacity: 0}}/>
        {/*<img className="image" src="tanalee-youngblood-CMdQcxsWZE0-unsplash.jpg" />*/}
      </div>
    </div>
  );
};

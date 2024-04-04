import React from "react";

export default function RecentMediaExample(props) {

    let image =
    "https://www2.arccorp.com/globalassets/homepage/redesign/newsroom/newsroom" +
    ((props.title.length % 7) + 1) +
    ".jpg"

    return (
        <div className="col-lg-12">
        <a href={props.url}>
          <div
            className="card-background"
            style={{
              background:
                "url(" + image + ") center center no-repeat",
              backgroundSize: "cover",
              minHeight: "200px"
            }}
          >
            <div className="recent-inner">
              <div className="recent-title">{props.title}</div>
              <div className="recent-company">{props.source}</div>
            </div>
          </div>
        </a>
      </div>
    );
}

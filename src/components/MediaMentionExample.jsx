import React from "react";

export default function MediaMentionExample(props) {
    return (
        <div className="row">
        <div className="col-lg-12">
          <div className="mention-inner" style={{borderBottom: "1px solid #000", borderTop: "1px solid #000", marginTop: "20px", marginBottom: "20px"}}>
            <div className="mention-tags">{props.source}</div>
            <div className="mention-title">
              <a style={{color: "#2a2b2c"}} href={props.url}>{props.title}</a>
            </div>
            <div className="mention-date">
              {props.date}
            </div>
          </div>
        </div>
      </div>
    );
}

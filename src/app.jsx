import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MediaMentionExample from "./components/MediaMentionExample";
import RecentMediaExample from "./components/RecentMediaExample";

export default function App() {
  const [markup, setMarkup] = useState("");
  const [mediaTitle, setMediaTitle] = useState(
    "How the Crisis at Boeing Could Make Your Next Vacation More Expensive"
  );
  const [mediaSource, setMediaSource] = useState("CNN");
  const [mediaDate, setMediaDate] = useState("Mar 21, 2024");
  const [mediaUrl, setMediaUrl] = useState(
    "https://edition.cnn.com/2024/03/21/business/boeing-crisis-vacation-ticket-prices/index.html"
  );
  const { register, getValues } = useForm();

  useEffect(() => {
    setMarkup(
      "<p><a href=" +
        mediaUrl +
        ">" +
        mediaTitle +
        '<strong><br /><span class="source-name">' +
        mediaSource +
        '</span><br /></strong></a><span class="media-date">' +
        mediaDate +
        "</span></p>"
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h1>Media Mention Tool</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="side-bar">
            <form>
              <label className="form-label">Media Mention Title</label>
              <br />
              <input
                className="media-input"
                {...register("title", { onChange: (e) => console.log(e) })}
                placeholder="Media Title"
              />
              <br />
              <label className="form-label">Media Mention Source</label>
              <br />
              <input
                className="media-input"
                {...register("source", { onChange: (e) => console.log(e) })}
                placeholder="Source Name"
              />
              <br />
              <label className="form-label">Media Mention Date</label>
              <br />
              <input
                className="media-input"
                {...register("date", { onChange: (e) => console.log(e) })}
                placeholder="Apr 04, 2024"
              />
              <br />
              <label className="form-label">Media Mention URL</label>
              <br />
              <input
                className="media-input"
                {...register("url", { onChange: (e) => console.log(e) })}
                placeholder="https://"
              />
              <br />

              <div
                className="ctaBtn"
                type="button"
                onClick={() => {
                  setMediaTitle(getValues("title"));
                  setMediaSource(getValues("source"));
                  setMediaDate(getValues("date"));
                  setMediaUrl(getValues("url"));
                }}
              >
                Set Media Mention
              </div>
            </form>
            <h2>Code Output</h2>
            <textarea name="" id="" rows="12" defaultValue={markup}></textarea>
          </div>
        </div>

        <div className="col-9">
          <div className="col-lg-12">
            <h2>Media Archive:</h2>
            <MediaMentionExample
              source={mediaSource}
              title={mediaTitle}
              date={mediaDate}
              url={mediaUrl}
            />
            <br />
          </div>
          <div className="col-lg-12">
            <h2>Recent Media:</h2>
            <RecentMediaExample
              source={mediaSource}
              title={mediaTitle}
              url={mediaUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

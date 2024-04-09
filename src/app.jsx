import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import MediaMentionExample from "./components/MediaMentionExample";
import RecentMediaExample from "./components/RecentMediaExample";

export default function App() {
  const [markup, setMarkup] = useState("");
  const [mediaTitle, setMediaTitle] = useState(
    "How the Crisis at Boeing Could Make Your Next Vacation More Expensive"
  );
  const [mediaSource, setMediaSource] = useState("CNN");
  const [mediaMonth, setMediaMonth] = useState("Apr");
  const [mediaDay, setMediaDay] = useState("5");
  const [mediaYear, setMediaYear] = useState("2024");
  const [mediaUrl, setMediaUrl] = useState(
    "https://edition.cnn.com/2024/03/21/business/boeing-crisis-vacation-ticket-prices/index.html"
  );

  useEffect(() => {
    setMarkup(
      "<p><a href=" +
        mediaUrl +
        ">" +
        mediaTitle +
        '<strong><br /><span class="source-name">' +
        mediaSource +
        '</span><br /></strong></a><span class="media-date">' +
        mediaMonth +
        " " +
        mediaDay +
        ", " +
        mediaYear +
        "</span></p>"
    );
  });

  return (
    <div className="container" style={{ maxWidth: "1250px" }}>
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
                required
                placeHolder={mediaTitle}
                onChange={(e) => setMediaTitle(e.target.value)}
              />
              <br />
              <label className="form-label">Media Mention Source</label>
              <br />
              <input
                className="media-input"
                required
                placeHolder={mediaSource}
                onChange={(e) => setMediaSource(e.target.value)}
              />
              <br />
              <label className="form-label">Media Mention Date</label>
              <br />
              <div className="row no-gutters">
                <div className="col">
                  <div className="date-select">
                    <select
                      required
                      onChange={(e) => setMediaMonth(e.target.value)}
                      defaultValue={mediaMonth}
                    >
                      <option value="Jan">Jan</option>
                      <option value="Feb">Feb</option>
                      <option value="Mar">Mar</option>
                      <option value="Apr">Apr</option>
                      <option value="May">May</option>
                      <option value="Jun">Jun</option>
                      <option value="Jul">Jul</option>
                      <option value="Aug">Aug</option>
                      <option value="Sep">Sep</option>
                      <option value="Oct">Oct</option>
                      <option value="Nov">Nov</option>
                      <option value="Dec">Dec</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="date-select">
                    <select
                      required
                      onChange={(e) => setMediaDay(e.target.value)}
                      defaultValue="5"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="date-select">
                    <select
                      required
                      onChange={(e) => setMediaYear(e.target.value)}
                    >
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                    </select>
                  </div>
                </div>
              </div>

              <label className="form-label">Media Mention URL</label>
              <br />
              <input
                className="media-input"
                required
                placeholder={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
              />
            </form>
            <br />
            <h2>Code Output</h2>
            <textarea name="" id="" rows="10" value={markup}></textarea>
            <CopyToClipboard text={markup}> 
              <a onClick={() => alert("Copied code")} className="ctaBtn">Copy Code</a>
            </CopyToClipboard>
          </div>
        </div>

        <div className="col-9">
          <div className="col-lg-12">
            <h2>Media Archive:</h2>
            <MediaMentionExample
              source={mediaSource}
              title={mediaTitle}
              date={mediaMonth + " " + mediaDay + ", " + mediaYear}
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

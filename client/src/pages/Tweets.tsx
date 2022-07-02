import React, { ReactNode } from "react";
import useGetAllTweets from "../hooks/useGetTweets";
import logo from "../assets/twitter_gear.png";
import verify from "../assets/verify.png";
import sum from "../assets/sum.png";
import Twitl from "../assets/twitl.png";
import "./tweets.css";
import { Button, InputBase } from "@mui/material";

function Tweets() {
  const { error, loading, data } = useGetAllTweets();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Something Went Wrong...</h1>;

  return (
    <div>
      <div className="Tweetcontainer">
        <h1>Tweets</h1>
        <Button
          style={{
            textTransform: "none",
            color: "black",
            backgroundColor: "lightgrey",
            marginRight: "30px",
            height: "30px",
            marginTop: "20px",
          }}
          startIcon={
            <img src={Twitl} alt="verify icon" height={"20px"} width={"20px"} />
          }
        >
          Follow @twitterapi
        </Button>
      </div>
      {data.Tweets.map(
        (
          tweet: {
            body: ReactNode;
            date: string;
            id: Number;
          },
          key: any
        ) => (
          <div className="container">
            <img src={logo} alt="twitter logo" height={"80px"} width={"80px"} />
            <div>
              <div className="topcontainer">
                <div className="topcontainerleft">
                  Twitter API
                  <img
                    src={verify}
                    alt="verify icon"
                    height={"20px"}
                    width={"20px"}
                  />
                  @twitterapi
                </div>
                <div className="topcontainerright">{tweet.date}</div>
              </div>
              <div className="bodycontainer">
                {tweet.body}
                <div>
                  <Button
                    style={{ textTransform: "none", color: "grey" }}
                    startIcon={
                      <img
                        src={sum}
                        alt="verify icon"
                        height={"20px"}
                        width={"20px"}
                      />
                    }
                  >
                    Show Summary
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <div style={{ width: "82%", backgroundColor: "lightgray" }}>
        <InputBase
          placeholder={"Tweet to @twitterapi"}
          style={{
            border: "1px solid grey",
            backgroundColor: "white",
            width: "99%",
            margin: "5px 5px",
          }}
        />
      </div>
    </div>
  );
}

export default Tweets;

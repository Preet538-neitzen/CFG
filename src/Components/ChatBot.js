import { useState } from "react";
import image from "./chatbot-page-img.svg";

const ChatBot = () => {

  const [question, setQuestion] = useState('');

  // Dummy data
  const [messages, setMessages] = useState([
    {
      type: "question",
      text: "Some dummy question?"
    },
    {
      type: "answer",
      text: "Some dummy answer"
    },
    {
      type: "question",
      text: "Some dummy question?"
    },
    {
      type: "answer",
      text: "Some dummy answer"
    },
    {
      type: "question",
      text: "Some dummy question?"
    },
    {
      type: "answer",
      text: "Some dummy answer"
    },
    {
      type: "question",
      text: "Some dummy question?"
    },
    {
      type: "answer",
      text: "Some dummy answer"
    }
  ]);

  // Tells if chat window is open or not
  const [chatOpen, setChatOpen] = useState(false);

  function sendQuestion(e) {
    e.preventDefault();
    console.log(question);
    // Fetch data from API here
  }

  // if (chatOpen === true) {
  return (
    <>
      <br />
      <div className="container col-md-8 col-sm-12">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-auto">
            <strong><p style={{ fontSize: "3rem" }}>Feel free to chat with us!!</p></strong>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={image} alt="" width="100%" />
          </div>
        </div>
        <br />
        <br />
        <div id="chatbot" className="container col-md-8 col-sm-12 shadow-lg" style={{ height: "50%" }}>

          <div id="messages" style={{ height: "75%", backgroundColor: "rgb(250, 250, 250)", overflowY: "scroll" }}>
            <div className="m-1">
              {
                messages.map((message, i) => (
                  <div key={i} className="p-2 my-3" style={{ color: "white", width: "70%", lineHeight: "1", marginLeft: message.type === "answer" ? "0px" : "auto", backgroundColor: message.type === "answer" ? "#7868E6" : "#845EC2", borderRadius: "10px", borderBottomLeftRadius: message.type === "answer" ? "0px" : "10px", borderBottomRightRadius: message.type === "answer" ? "10px" : "0px" }}><small>{message.text}</small></div>
                ))
              }
            </div>
          </div>
          <br />
          <div id="type-area" style={{ height: "15%" }}>
            <form onSubmit={sendQuestion}>
              <input type="text" className="form-control container-fluid" placeholder="How can we help you?" onChange={(e) => setQuestion(e.target.value)} />
              <input className="btn btn-dark" type="submit" style={{ display: "none" }} />
            </form>
          </div>
          <br />
          <br />
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
  // } else {
  // return <button className="btn btn-dark" style={{ position: "absolute", right: "10px", bottom: "10px" }} onClick={() => setChatOpen(!chatOpen)}>Start Chat</button>
  // }
}

export default ChatBot;
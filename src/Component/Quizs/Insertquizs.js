import React, { useState, useEffect } from "react";
import "./insertquizs.css";
import Navbar from "../Navbar";
import Axios from "axios";
import swal from "sweetalert";
import { Button, Form, FloatingLabel } from "react-bootstrap";

export default function Insertquizs() {
  // const [question, setQuestion] = useState();
  // const [title, setTitle] = useState();
  // const [type, setType] = useState();
  // const [score_max, setScore_max] = useState();
  // const [is_active, setIs_active] = useState();
  // const [end_time, setEnd_time] = useState();
  // const [total, setTotal] = useState();
  // const [content, setContent] = useState();

  // const handleSubmitQuestion = () => {
  //   const dataQuestion = [
  //     {
  //       title: title,
  //       type: type,
  //       score_max: score_max,
  //       is_active: is_active,
  //       end_time: end_time,
  //       total: total,
  //       content: content,
  //     },
  //   ];

  //   if (title) {
  //     Axios.post(
  //       "http://localhost:8080/Question/create-question",
  //       dataQuestion
  //     ).then(async (res) => {
  //       await swal({
  //         icon: "success",
  //         title: `SIGN UP `,
  //         text: `Thank you, for applying for membership.`,
  //       });
  //       console.log(res.data);
  //       window.location.reload();
  //     });
  //   } else {
  //     swal({
  //       icon: "warning",
  //       title: `SIGN UP Error`,
  //       text: `Please confirm the conditions for applying for membership.`,
  //     });
  //   }
  // };

  // const getQuestion = () => {
  //   Axios.get("http://localhost:8080/question")
  //     .then((res) => {
  //       setQuestion(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  useEffect(() => {
    // getQuestion();
    // console.log(question);
  }, []);

  const handleADDSubmit = () => {
    const dataQuestion = [
      {
        quiz: Quiz,
        type: Type,
        score_max: ScoreMax,
        end_time: EndTime,
        total: Total,
        is_active: true,
        rankType: RankType,
        content: Content,
      },
    ];
    Axios.post(
      "http://localhost:8080/question/create-question",
      dataQuestion
    ).then(async (res) => {
      await swal({
        icon: "success",
        title: `SIGN UP `,
        text: `Thank you, for applying for membership.`,
      });
      console.log(res.data);

      window.location.reload();
    });
  };

  const [Quiz, setQuiz] = useState();
  const [Type, setType] = useState();
  const [ScoreMax, setScoreMax] = useState();
  const [EndTime, setEndTime] = useState();
  const [Total, setTotal] = useState();
  const [RankType, setRankType] = useState();
  const [Content, setContent] = useState();

  return (
    <div className="insertquizsContainer">
      <Navbar />
      <div>
        <div className="QuizsTitle">
          <p className="textQuizsTitle">Insert Quiz</p>
        </div>
        <div className="EditAnswersContainer">
          <div className="LitseningContainer">
            <FloatingLabel
              controlId="floatingInput"
              label="Quiz"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={(e) => setQuiz(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Type"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="text"
                placeholder="name@example.com"
                onChange={(e) => setType(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Score_max"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="number"
                placeholder="name@example.com"
                onChange={(e) => setScoreMax(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="End_time"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="number"
                placeholder="name@example.com"
                onChange={(e) => setEndTime(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Totol"
              className="mb-3 mt-3"
            >
              <Form.Control
                type="number"
                placeholder="name@example.com"
                onChange={(e) => setTotal(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingSelect" label="Rank with selects">
              <Form.Select
                aria-label="Floating label select example"
                onChange={(e) => setRankType(e.target.value)}
              >
                <option>Open this Select Menu</option>
                <option value="none">None</option>
                <option value="toeic">TOEIC</option>
                <option value="crud">CRUD</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Content"
              className="mt-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => setContent(e.target.value)}
              />
            </FloatingLabel>
            <div className="EditQuizADDItem">
              <p onClick={handleADDSubmit}>+ ADD Item</p>
            </div>
          </div>
          <div className="TabContainer">
            <p className="SectionText">ว่างอะไรหรือลบออกดี</p>
          </div>
        </div>
      </div>
    </div>
  );
}

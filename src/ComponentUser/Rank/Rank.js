import "./Rank.css";
import Reward1 from "../../Img/Reward/Reward1.png";
import Reward2 from "../../Img/Reward/Reward2.png";
import Reward3 from "../../Img/Reward/Reward3.png";
import Reward4 from "../../Img/Reward/Reward4.png";
import Reward5 from "../../Img/Reward/Reward5.png";
import Reward6 from "../../Img/Reward/Reward6.png";
import Reward7 from "../../Img/Reward/Reward7.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Rank() {
  const [quest, setQuest] = useState([]);
  const [level, setLevel] = useState([]);
  const [userLv, SetUserLv] = useState(110);

  const getQuest = () => {
    Axios.get("http://localhost:8080/quests")
      .then((res) => {
        setQuest(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getLevel = () => {
    Axios.get("http://localhost:8080/levels")
      .then((res) => {
        setLevel(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuest();
    getLevel();
    console.log(level);
  }, []);

  const DataReward = [
    {
      id: 1,
      img: `${Reward1}`,
    },
    {
      id: 2,
      img: `${Reward2}`,
    },
    {
      id: 3,
      img: `${Reward3}`,
    },
    {
      id: 4,
      img: `${Reward4}`,
    },
    {
      id: 5,
      img: `${Reward5}`,
    },
    {
      id: 6,
      img: `${Reward6}`,
    },
    {
      id: 7,
      img: `${Reward7}`,
    },
  ];

  const DataQuest = [
    {
      id: 1,
      title: "Grammar1",
      content: "Get English Skill quiz over 50 point",
      ExpPoint: 20,
    },
    {
      id: 2,
      title: "Grammar2",
      content: "Get English Skill quiz over 40 point",
      ExpPoint: 40,
    },
    {
      id: 3,
      title: "Grammar3",
      content: "Get English Skill quiz over 30 point",
      ExpPoint: 60,
    },
    {
      id: 4,
      title: "Grammar4",
      content: "Get English Skill quiz over 20 point",
      ExpPoint: 80,
    },
  ];

  function ExpBar() {
    {
      level.map((item) => {});
    }
    return (
      <div className="ExpBar">
        <ProgressBar
          now={userLv}
          label={`${userLv} / 100`}
          variant="success"
          className="ExpBarProgress"
        />
      </div>
    );
  }

  return (
    <div className="Rank">
      <div className="container-Rank">
        <div className="RankFull">
          <p>Home &raquo; Quiz &raquo; Result</p>
        </div>
        <div className="RarkBody">
          <div className="ProfileRank">
            <img
              className="ProfileRankImg"
              src="https://scontent.fnak3-1.fna.fbcdn.net/v/t1.15752-9/327373069_1782240815490151_5594021947731530814_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHhR4de_9xzxvEEHKXcXtutzbPNH5anbtDNs80flqdu0IibIJxp5RCyOfVwI2oOKuA9v7BogY2I-eoCUescKMYX&_nc_ohc=EBWBMuJa4hgAX9VWqGM&_nc_ht=scontent.fnak3-1.fna&oh=03_AdRMCeAds555YCeGiSGXJVwN3TeUL1zPhfF8-qpkYvOIEQ&oe=63F8E50C"
              alt=""
            />
            {level.map((item) => {
              if (userLv >= item.Exp_max) {
                switch (item.Name) {
                  case "Silver I":
                    return (
                      <>
                        <img className="ImgRank" src={Reward2}></img>
                        <p>{item.Name}</p>
                      </>
                    );
                    break;
                  case "Silver II":
                    return (
                      <>
                        <img className="ImgRank" src={Reward3}></img>
                        <p>{item.Name}</p>
                      </>
                    );
                    break;
                  default:
                    break;
                }
                return;
              }
            })}
            <p>Jane Noonbow</p>
          </div>
          <div className="RankBoard">
            <div className="head-RankBoard">
              <h2>Hello,Jane</h2>
              <ExpBar />
              {level.map((item) => {
                if (userLv >= item.Exp_max) {
                  return (
                    <>
                      <p>
                        FLRU Level {item.id}
                        <ProgressBar
                          variant="success"
                          now={userLv}
                          label={userLv}
                          max={item.Exp_max}
                        />
                      </p>
                    </>
                  );
                }
              })}
            </div>
            {/* <div className="Body-RankBoard">
              <h2>Badge Collection</h2>
              <img src="" alt="" />
            </div> */}
            <div className="Body-RankBoard">
              <div className="Body-Head-level">
                <h2>FLRU Level</h2>
              </div>
              <ul class="step-wizard-list">
                <li class="step-wizard-item">
                  <span class="progress-count">1</span>
                  <span class="progress-label">Bronze</span>
                </li>
                <li class="step-wizard-item">
                  <span class="progress-count">2</span>
                  <span class="progress-label">Silver</span>
                </li>
                <li class="step-wizard-item current-item">
                  <span class="progress-count">3</span>
                  <span class="progress-label">Gold</span>
                </li>
                <li class="step-wizard-item">
                  <span class="progress-count">4</span>
                  <span class="progress-label">Platinum</span>
                </li>
              </ul>
              <h4>Reward</h4>
              <div className="Reward-Rank">
                {DataReward.map((item) => {
                  return (
                    <>
                      <div className="Reward-Rank-btn">
                        <img src={item.img} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
              <h4>Goal</h4>
              <div className="Goal-Rank">
                {quest.map((item) => {
                  return (
                    <div className="Body-Goal-Rank">
                      {/* <h5>{item.quest}</h5> */}
                      <p>{item.content}</p>
                      <ProgressBar
                        variant="success"
                        now={20}
                        label={20}
                        max={item.exp}
                      />
                    </div>
                  );
                })}
              </div>
              <h4>Guide</h4>
              <div className="Guide-Rank">
                <div className="Body-Guide-Rank">
                  <p>Try out some mini course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import "../../Styles/AgricultureUniversiry.css";
import Loader from "../Loader";
import bannerImg from "../../Images/crousal/UniversityBanner.jpg"
const { useEffect, useState } = require("react");
const AgricultureUniversity = () => {
  const [universityData, setUniversityData] = useState([]);
  const [DataLoading, setDataLoading] = useState(true);
  const getPageData = async () => {
    try {
      const res = await fetch("AgricultureUniversityData", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUniversityData(data);
      if (res.status === 200) {
        setDataLoading(false);
      }
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);
  const AgroUniversity = universityData;
  const extrenalLink = (e) => {
    window.location.assign(e.target.value);
  };
  const IsDataLoad = () => {
    if (DataLoading === true) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="university-main-container">
            <div className="university-banner">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={bannerImg} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.bellenglish.com/wp-content/uploads/2021/02/pexels-thisisengineering-3912372-1920x960-6038c89b85905-1920x960-c-default.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://www.bellenglish.com/wp-content/uploads/2021/02/pexels-thisisengineering-3912372-1920x960-6038c89b85905-1920x960-c-default.jpg" alt="Third slide"/>
    </div>
  </div>
</div>
            </div>
            <div className="university-container-headung">
              <h1>Agriculture University Of India</h1>
            </div>
            <div className="university-card-container">
              {universityData.map((item) => (
                <>
                  <div className="card mb-3 ">
                    <img
                      className="card-img-top img-fluid"
                      src={item.Imageurl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.UniversityName}</h5>
                      <p className="card-text">
                        Adress of university : <cite>{item.adress}</cite>
                      </p>
                      <p className="card-text">contact : {item.contact}</p>
                      <p className="card-text">Email Id : {item.emailId}</p>
                      {item.website && (
                        <a
                          href={item.website}
                          target={"_blank"}
                          rel="noopener noreferrer external"
                        >
                          <button className="btn btn-success">
                            Visit University Website
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </>
      );
    }
  };
  return <IsDataLoad />;
};
export default AgricultureUniversity;

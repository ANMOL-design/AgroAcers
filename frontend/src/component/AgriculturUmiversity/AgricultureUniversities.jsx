import "../../Styles/AgricultureUniversiry.css";
import Loader from "../Loader";
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
            <div className="university-banner"></div>
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

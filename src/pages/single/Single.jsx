import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEqhBsVi8l6eg/profile-displayphoto-shrink_800_800/0/1662763784215?e=1673481600&v=beta&t=xE7VesXPHiOsOnyXQU_lDSwZXu62rAiTAunhF6NuQ4U"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Ervin Kacar</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">kacarervin@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+38165 419 419 5</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">4 jula 26 Novi Pazar</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Serbia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User presence" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Users</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;

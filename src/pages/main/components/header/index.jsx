import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import styles from "./index.module.scss";
import { declOfNum } from "../../../../utils";
import logo from "./logo.png";

const Header = ({ count, limit }) => (
  <div className="container-fluid">
    <div className="row middle-xs between-xs">
      <div className="col-xs-6">
        <img src={logo} className={styles.img} alt="logo" />
      </div>
      <div className="col-xs-6">
        <div className={styles.text}>
          {count > 0 ? (
            <span>
              С нами {count < limit ? "пока" : "уже"}{" "}
              <span className={styles.count}>{count}</span>{" "}
              {declOfNum(count, ["человек", "человека", "человек"])}
            </span>
          ) : (
            <span>Идёт загрузка...</span>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default connect(state => ({ count: state.main.payload.docCount }))(
  Header
);

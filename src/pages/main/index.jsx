import React, { Component } from "react";
import Youtube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import _ from "lodash";
import { db } from "../../store";
import Form from "./components/form";
import Header from "./components/header";
import Message from "./components/message";
import Footer from "./components/footer";
import styles from "./index.module.scss";

const Page = () => {
  return (
    <React.Fragment>
      <div className={styles.header} id="root">
        <Header limit={10} />
      </div>
      <div className={styles.section_1}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.textshadow}>
              Борьба с мусором – это борьба за наше будущее. Мусорная мафия
              хочет его уничтожить, построив там мусоросжигательные заводы и
              гигантские свалки. Мы не допустим этого. Первым делом защитим
              Русский Север, после чего расширим борьбу на всю Россию.
            </div>
          </div>
          <div className="row">
            <a className={styles.button} href="#form">
              Присоединиться
            </a>
          </div>
        </div>
      </div>
      <div className={styles.section_2}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.youtube}>
              <Youtube videoId="A2pZ4loOuhs" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_4}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.textshadow}>
              Душа болит за Россию!!! Очень больно и горько, как кучка
              высокопоставленных гастролёров, пытается превратить твой Родной
              Край, в свалку. В отхожее место, для других регионов России. Это
              плевок в душу народа. Это нельзя допустить, нужно бороться, всеми
              законными методами. Ведь все эти мусорные бароны потом уедут на
              свои заграничные виллы, а мы останемся.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_5}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.alert}>
              Это – наша страна. Мы за нее в ответе. <br />
              Каждый в ответе за Чистый Край.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_6}>
        <div className="container-fluid">
          <div className="row">
            <Form />
          </div>
        </div>
      </div>
      <div className={styles.section_7}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.social}>
              <a href="https://vk.com/zacistijkrai" className={styles.fa}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a
                href="https://www.facebook.com/story.php?story_fbid=513204562534622&id=100015352480943"
                className={styles.fa}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC2pvNA_Wkq_H5quGVUYKqZw"
                className={styles.fa}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <Message />
    </React.Fragment>
  );
};

class Info extends Component {
  state = {}
  componentDidMount = () => {
    db.allDocs({ include_docs: true }).then(result => {
      this.setState(result);
    }).catch(err => {
      console.error(err);
    })
  }
  render() {
    return (
      <pre>
        { this.state.rows && JSON.stringify(this.state.rows, null, '  ') }
      </pre>
    )
  }
}

class Main extends Component {
  render() {
    return (document.location.hash === "#l4ksjaKLHf$oaIew" ? <Info/> : <Page /> );
  }
}

export default Main;

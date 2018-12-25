import React from "react";
import Youtube from "react-youtube";
import Form from "./components/form";
import Header from "./components/header";
import Message from "./components/message";
import Footer from "./components/footer";
import styles from "./index.module.scss";

export default () => {
  return (
    <React.Fragment>
      <div className={styles.header} id="root">
        <Header limit={10}/>
      </div>
      <div className={styles.section_1}>
        <div className="container-fluid">
          <div className="row">
            Борьба с мусором – это борьба за наше будущее. Мусорная мафия хочет
            уничтожить, построив там мусоросжигательные заводы и гигантские
            свалки. Мы не допустим этого. Первым делом защитим Русский Север,
            после чего расширим борьбу на всю Россию.
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
              <Youtube videoId="PQvlt8rqloA"/>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_4}>
        <div className="container-fluid">
          <div className="row">
            Душа болит за Россию!!! Очень больно и горько, как кучка
            высокопоставленных гастролёров, пытается превратить твой Родной
            Край, в свалку. В отхожее место, для других регионов России. Это
            плевок в душу народа. Это нельзя допустить, нужно бороться, всеми
            законными методами. Ведь все эти мусорные бароны потом уедут на свои
            заграничные виллы, а мы останемся.
          </div>
        </div>
      </div>
      <div className={styles.section_5}>
        <div className="container-fluid">
          <div className="row">
            Это – наша страна. Мы за нее в ответе. Каждый в ответе За Чистый
            Край.
          </div>
        </div>
      </div>
      <div className={styles.section_6}>
        <div className="container-fluid">
          <div className="row">
            <Form/>
          </div>
        </div>
      </div>
      <div className={styles.section_7}>
        <div className="container-fluid">
          <div className="row">
            <Footer/>
          </div>
        </div>
      </div>
      <Message/>
    </React.Fragment>
  );
};


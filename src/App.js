// import "./App.css";

import styled from "styled-components";
import { motion } from "framer-motion";
import KakaoMap from "./components/KaKao/Map";
import Slider from "./components/Slider";

const Container = styled(motion.div)`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #f9f7ed;
  text-align: center;
`;

const InnerContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 40px);
  height: auto;
  border-right: 0.3px solid #000000;
  border-left: 0.3px solid #000000;
  overflow-y: scroll;
`;

const TitleSection = styled(motion.section)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  h1 {
    font-family: "NewYork";
    font-weight: 100;
  }
`;

const MainPictureSection = styled(motion.section)`
  width: 100%;
  height: 438px;
  border-top: 0.3px solid #000000;
  border-bottom: 0.3px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 255px;
  }
`;

const IntroSeciton = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 0.3px solid #000000;
  width: 100%;
  height: 134px;
  gap: 12px;
  h4 {
    margin: 0;
    font-size: 15px;
    font-weight: bold;
  }
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 300;
  }
`;

const AboutLoveSection = styled(motion.section)`
  width: 100%;
  padding-top: 44px;
  padding-bottom: 74px;
  height: 500px;
  border-bottom: 0.3px solid #000000;
  h4 {
    margin: 0;
    font-family: "NewYork";
    font-weight: 100;
    font-size: 26px;
    margin-bottom: 40px;
  }
  article {
    margin: 0;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 0.01;
    b {
      font-weight: bold;
    }
  }
`;

const StepCircle = styled(motion.div)`
  width: 24px;
  height: 24px;
  background-color: #272727;
  font-family: "NewYork";
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 12px;
  color: #f9f7ed;
  line-height: 24px;
`;

const ParentsSection = styled(motion.section)`
  width: 100%;
  height: 220px;
  padding-top: 64px;
  padding-bottom: 52px;
  position: relative;
  border-bottom: 0.3px solid #000000;
`;

const CalendarSection = styled(motion.section)`
  width: 100%;
  height: 330px;
  padding-top: 64px;
  padding-bottom: 62px;
  position: relative;
  border-bottom: 0.3px solid #000000;
  h4 {
    font-family: "NewYork";
    font-size: 20px;
    margin: 0;
  }
`;

const CalendarGrid = styled(motion.div)`
  display: grid;
  justify-items: center;
  padding: 20px;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarDay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "NewYork";
  width: 30px;
  height: 30px;
  &:first-child {
    opacity: 0;
  }
`;

const CalendarDDay = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "NewYork";
  position: relative;
  width: 30px;
  height: 30px;
  span {
    z-index: 100;
    color: #f9f7ed;
  }

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 50%;
    left: 0;
    background: black;
    z-index: 1;
  }
`;

const MapSection = styled(motion.div)`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 100%;
  border-bottom: 0.3px solid #000000;
  gap: 10px;
`;

const MapLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  /* background-color: white; */
  border: 0.1px solid rgba(0, 0, 0, 0.7);
  padding-left: 14px;
  border-radius: 10px;
  gap: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .tmap {
    border: 0.2px solid rgba(64, 153, 218, 0.8);
  }
  .naver {
    border: 0.2px solid rgba(105, 235, 105, 0.8);
  }
`;

const MapText = styled.p`
  letter-spacing: 0.7px;
  font-size: 17px;
  b {
    font-weight: 900;
  }
`;

const AlbumSection = styled(motion.div)`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  border-bottom: 0.3px solid #000000;
  gap: 10px;
`;

const GiftSection = styled(motion.div)`
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  border-bottom: 0.3px solid #000000;
  gap: 10px;
`;

const days = new Array(32).fill(1);

const { Kakao } = window;

const {
  REACT_APP_GROOM_NAME,
  REACT_APP_GROOM_MOTHER_NAME,
  REACT_APP_GROOM_FATHER_NAME,
  REACT_APP_BRIDE_NAME,
  REACT_APP_BRIDE_MOTHER_NAME,
  REACT_APP_BRIDE_FATHER_NAME,
  REACT_APP_TMAP_KEY,
  REACT_APP_WEDDING_HALL_NAME,
  REACT_APP_WEDDING_HALL_ADDRESS,
} = process.env ?? {};

const LinkToKakaoNavi = () => {
  Kakao.Navi.start({
    name: REACT_APP_WEDDING_HALL_NAME,
    x: 127.11205203011632,
    y: 37.39279717586919,
    coordType: "wgs84",
  });
};

function App() {
  return (
    <Container>
      <InnerContainer
        initial={{ display: "none" }}
        animate={{ display: "block" }}
        transition={{ duration: 0 }}
        viewport={{ once: true }}
      >
        <TitleSection
          // initial={{ opacity: 0, height: 0 }}
          // animate={{ opacity: 1, height: 90 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            viewport={{ once: true }}
          >
            SAVE THE DATE
            <br />
          </motion.h1>
        </TitleSection>
        <MainPictureSection
          // initial={{ opacity: 0, height: 0 }}
          // animate={{ opacity: 1, height: 438 }}
          transition={{ duration: 2.5 }}
          viewport={{ once: true }}
        >
          <motion.img
            alt="ring"
            src="https://bo-like-chicken.github.io/wedding-card/images/photos/1.jpeg"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 255 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          />
        </MainPictureSection>
        <IntroSeciton>
          <motion.h4
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            {REACT_APP_GROOM_NAME} & {REACT_APP_BRIDE_NAME}
          </motion.h4>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            8??? 20??? ?????? 11??? {REACT_APP_WEDDING_HALL_NAME}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            {REACT_APP_WEDDING_HALL_ADDRESS}
          </motion.p>
        </IntroSeciton>
        <AboutLoveSection>
          <motion.h4
            initial={{ opacity: 0, scale: 1.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            About The Love
          </motion.h4>
          <motion.article
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.85, scale: 1 }}
            transition={{
              duration: 5,
            }}
            viewport={{ once: true }}
          >
            <b>??????</b>??? ?????? ????????? ???????????? ????????????
            <br />
            ????????? ???????????? ????????????. <br />
            <br />
            ?????? ????????? ?????? ?????????
            <br /> ??? <b>?????????</b>??? ??????????????? ?????????. <br />
            <br />
            ?????? ?????????, ????????? ?????? ????????? <br />??? ?????? ????????? ????????? ??????{" "}
            <b>??????</b>????????? ?????????.
            <br />
            <br />
            ????????? ???????????? ???????????? <br />
            ????????? ??? ??? ?????? <b>????????? ???</b>?????????.
            <br />
            ????????? ?????? ????????? ?????? ??? ?????? ?????? ??????
            <br /> ?????? ????????????.
            <br />
            <br />
            Interstellar, 2014
          </motion.article>
        </AboutLoveSection>
        <ParentsSection>
          <StepCircle>1</StepCircle>
          <motion.p
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 3,
            }}
            viewport={{ once: true }}
          >
            {REACT_APP_GROOM_FATHER_NAME} {REACT_APP_GROOM_MOTHER_NAME}??? ??????{" "}
            <b>{REACT_APP_GROOM_NAME}</b>
          </motion.p>
          <motion.p
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 3,
            }}
            viewport={{ once: true }}
          >
            {REACT_APP_BRIDE_FATHER_NAME} {REACT_APP_BRIDE_MOTHER_NAME}??? ??????{" "}
            <b>{REACT_APP_BRIDE_NAME}</b>
          </motion.p>
        </ParentsSection>
        <CalendarSection>
          <StepCircle>2</StepCircle>
          <motion.h4>2022. 08</motion.h4>
          <CalendarGrid>
            {days.map((x, index) => {
              return index !== 20 ? (
                <CalendarDay
                  //   style={{ visibility: index === 0 && "hidden" }}
                  key={index}
                >
                  <span>{index}</span>
                </CalendarDay>
              ) : (
                <CalendarDDay key={index}>
                  <span>{index}</span>
                </CalendarDDay>
              );
            })}
          </CalendarGrid>
        </CalendarSection>
        <AlbumSection>
          <Slider />
        </AlbumSection>
        <MapSection>
          <KakaoMap />
          <MapLink href="https://map.kakao.com/link/to/8282484">
            <motion.img
              alt="main_pic"
              src="https://bo-like-chicken.github.io/wedding-card/images/maps/icon_kakao_map.png"
            />
            <MapText>
              <b>????????????</b>?????? ??? ??????
            </MapText>
          </MapLink>
          <MapLink onClick={LinkToKakaoNavi}>
            <motion.img
              alt="main_pic"
              src="https://bo-like-chicken.github.io/wedding-card/images/maps/icon_kakao_navi.png"
            />
            <MapText>
              <b>????????? ??????</b>?????? ??? ??????
            </MapText>
          </MapLink>
          <MapLink
            href={`nmap://route/public?dlat=37.56098338057804&dlng=126.96815066098274&dname=${REACT_APP_WEDDING_HALL_NAME}`}
          >
            <motion.img
              alt="main_pic"
              src="https://bo-like-chicken.github.io/wedding-card/images/maps/icon_naver_map.png"
              className="naver"
            />
            <MapText>
              <b>????????? ??????</b>??? ??? ??????
            </MapText>
          </MapLink>
          <MapLink
            href={`https://apis.openapi.sk.com/tmap/app/routes?appKey=${REACT_APP_TMAP_KEY}&name=${REACT_APP_WEDDING_HALL_NAME}`}
          >
            <motion.img
              alt="main_pic"
              src="https://bo-like-chicken.github.io/wedding-card/images/maps/icon_tmap.png"
              className="tmap"
            />
            <MapText>
              <b>T map</b>?????? ??? ??????
            </MapText>
          </MapLink>
        </MapSection>
        <GiftSection>
          <h3>?????? & ???????????? ?????? ?????????</h3>
          <h4>????????? ???????????? ????????? ????????????</h4>
          <button>??????????????? ?????? ?????????</button>
          <p>?????? ????????? ????????? ???????????? ???????????? ????????????</p>
          <button>??????????????? ?????? ?????????</button>
          <p>?????? ????????? ????????? ???????????? ???????????? ????????????</p>
        </GiftSection>
        <GiftSection>
          <h1>
            ???????????? ????????????
            <br />
            ????????????
            <br />
            SUBWAY 1?????? ????????? ????????? 4?????? ????????? ????????? 400m ?????? ??????
            <br />
            BUS 8012?????? ?????? 7007?????? ??????
            <br />
          </h1>
          ------------------------
          <h1>?????????????????? ?????????</h1>
        </GiftSection>
      </InnerContainer>
    </Container>
  );
}

export default App;

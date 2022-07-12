import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const MapArea = styled.div`
  width: 100%;
  height: 100%;
`;

const KakaoMap = (props) => {
  useEffect(() => {
    const container = document.getElementById("myMap");

    const options = {
      center: new kakao.maps.LatLng("37.5608187887289", "126.968225883547"),
      level: 4,
    };
    const map = new kakao.maps.Map(container, options);

    // 지도에 확대 축소 컨트롤을 생성한다
    const zoomControl = new kakao.maps.ZoomControl();

    // 주소-좌표 변환 객체를 생성합니다
    const geocoder = new kakao.maps.services.Geocoder();

    // 지도의 우측에 확대 축소 컨트롤을 추가한다
    setTimeout(() => {
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      geocoder.addressSearch("서울 중구 청파로 464", (result, status) => {
        // console.log(result, "result");

        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new kakao.maps.Marker({
            map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">아벤티움</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    }, 5000);
  }, []);

  return <MapArea id="myMap" />;
};

export default KakaoMap;

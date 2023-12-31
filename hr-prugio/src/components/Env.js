import React from "react";
import env1 from '../img/env1.jpg';
import env2 from '../img/env2.jpg';
import env3 from '../img/env3.jpg';
import env4 from '../img/env4.png';
import env5 from '../img/env5.png';
import env6 from '../img/env6.png';
import env7 from '../img/env7.png';
import env8 from '../img/env8.png';



const Env = () => {
    return (
        <div className="env cat">
            <h2>입지환경</h2>
            <section id="eSection1">
                <img alt="백운호수푸르지오입지환경지도" src={env1}/>
                <img alt="백운호수푸르지오조감도"src={env2}/>
                <img alt="백운호수푸르지오조감도"src={env3}/>
                <img alt="백운호수푸르지오조감도"src={env4}/>
                <img alt="백운호수푸르지오조감도"src={env5}/>
                <img alt="백운호수푸르지오조감도"src={env6}/>
                <img alt="백운호수푸르지오조감도"src={env7}/>
                <img alt="백운호수푸르지오조감도"src={env8}/>

                
                <div className='info'>
                    <dl className="info">
                        <dd>상기 지역도는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 다를 수 있습니다.</dd>
                        <dd>강남에서 20분대 소요시간은 네이버 지도 길찾기(자동차) 기준으로 이동 시간대 및 도 로 상황 등에 따라 차이가 있을 수 있습니다.</dd>
                        <dd>의료복합용지 및 메종 의왕 등 각종 개발계획 및 교통계획에 관한 사항은 추후 관계기관의 사정에 따라 지연, 변경 및 취소될 수 있으며, 이는 시행사 및 시공사와 무관함을 알려드립니다.</dd>
                        <dd>상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있으며, 건축물의 외관 및 색채계획, 부대시설, 창호계획 조경계획, 문주 등의 기타 시설은 인허가 과정상 추후 변경될 수 있습니다</dd>
                    </dl>
                </div>
            </section>
        </div>
    )
}

export default Env;
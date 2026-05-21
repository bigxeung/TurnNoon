export default function Overview() {
  return (
    <section id="overview">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">01 · 창업사업개요</span>
          <h2 className="section-title">왜 TurnNoon이<br />필요할까요?</h2>
          <p className="section-desc">
            많은 예비 자영업자가 충분한 데이터 분석 없이 매장을 계약해요.
            잘못된 창업 결정은 단순한 사업 실패가 아니라 생계 위기로 이어질 수 있어요.
          </p>
        </div>

        <div className="feature-row">
          <div>
            <h2>창업 전,<br />리스크를 데이터로<br />진단해요.</h2>
            <p>
              공인중개사의 설명, 주변 조언, 프랜차이즈 본사 자료에 의존하는 대신
              희망 주소지·업종·객단가·월세·인건비·원가율·배달 비중을 입력해보세요.
              TurnNoon이 손익분기점, 필요 판매량, 폐업 위험도, 상권 위험 요인을 분석해드려요.
            </p>
          </div>
          <div className="feature-visual">
            <div className="mock">
              <div className="mock-title">손익분기점 진단</div>
              <div className="mock-big">하루 47개</div>
              <div className="mock-sub">매장이 살아남으려면 매일 팔아야 해요</div>
              <div className="mock-row">
                <span className="l">월세</span><span className="v">220만 원</span>
              </div>
              <div className="mock-row">
                <span className="l">인건비</span><span className="v">340만 원</span>
              </div>
              <div className="mock-row">
                <span className="l">위험도</span>
                <span className="v"><span className="badge-risk">위험</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-row reverse">
          <div>
            <h2>실패는 추천하지<br />않는 서비스.</h2>
            <p>
              기존 창업 서비스는 좋은 상권과 유망 업종을 추천하는 데 집중해요.
              반면 TurnNoon은 위험한 창업 조건을 발견하면 "이 조건은 위험합니다"라고 알려드려요.
              TurnNoon은 창업 성공 컨설팅이 아닌{' '}
              <strong style={{ color: 'var(--toss-blue)' }}>창업 실패 예방 서비스</strong>예요.
            </p>
          </div>
          <div className="feature-visual">
            <div className="mock">
              <div className="mock-title">반경 500m 폐업 이력</div>
              <div className="mock-big">12건</div>
              <div className="mock-sub">최근 2년간 유사 업종이 폐업했어요</div>
              <div className="mock-row">
                <span className="l">A 카페</span>
                <span className="v"><span className="badge-risk">11개월</span></span>
              </div>
              <div className="mock-row">
                <span className="l">B 베이커리</span>
                <span className="v"><span className="badge-warn">1년 4개월</span></span>
              </div>
              <div className="mock-row">
                <span className="l">C 디저트</span>
                <span className="v"><span className="badge-risk">8개월</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Market() {
  return (
    <section id="market" className="grey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">03 · 시장분석</span>
          <h2 className="section-title">누가 TurnNoon을<br />사용할 수 있나요?</h2>
          <p className="section-desc">
            창업자 개인뿐 아니라 소상공인 지원기관, 창업 교육기관, 세무사, 노무사, 창업 컨설턴트도 활용할 수 있어요.
            기관과 전문가는 TurnNoon 리포트로 더 객관적인 상담을 제공할 수 있어요.
          </p>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="num">B2C</div>
            <h3>예비 창업자</h3>
            <p>창업 전 손익분기점과 폐업 위험을 확인하고, 무리한 창업을 피할 수 있어요.</p>
          </div>
          <div className="card">
            <div className="num">B2B</div>
            <h3>전문가</h3>
            <p>세무사, 노무사, 창업 컨설턴트가 상담 자료로 활용해 객관적인 컨설팅을 제공해요.</p>
          </div>
          <div className="card">
            <div className="num">B2G</div>
            <h3>기관</h3>
            <p>소상공인 지원기관, 창업 교육기관, 창업보육센터가 데이터 기반 지원을 할 수 있어요.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

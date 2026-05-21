export default function Features() {
  return (
    <section className="grey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">핵심 기능</span>
          <h2 className="section-title">3가지 진단으로<br />창업 결정을 도와드려요.</h2>
        </div>
        <div className="grid-3">
          <div className="card">
            <div className="num">01</div>
            <h3>손익분기점<br />계산</h3>
            <p>월세, 인건비, 객단가, 원가율, 배달 비중을 입력하면 하루에 몇 개를 팔아야 하는지 정확히 계산해드려요.</p>
          </div>
          <div className="card">
            <div className="num">02</div>
            <h3>폐업 이력<br />분석</h3>
            <p>희망 주소지 주변에서 과거 유사 업종이 얼마나 폐업했는지 한눈에 확인할 수 있어요.</p>
          </div>
          <div className="card">
            <div className="num">03</div>
            <h3>부검 리포트<br />제공</h3>
            <p>폐업한 매장의 비용 구조, 리뷰, 경쟁 매장, 상권 환경을 분석해 왜 실패했는지 보여드려요.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

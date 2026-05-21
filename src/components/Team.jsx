export default function Team() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">참여인력의 전문성</span>
          <h2 className="section-title">함께 만드는<br />사람들이에요.</h2>
        </div>
        <div className="grid-2">
          <div className="card">
            <div className="num">개발</div>
            <h3>웹서비스와<br />데이터베이스 구축</h3>
            <p>손익분기점 계산 기능, 주소지 기반 조회 기능, 리포트 자동 생성 기능, 결제 기능을 개발해요.</p>
          </div>
          <div className="card">
            <div className="num">기획</div>
            <h3>사용자 문제<br />정의와 설계</h3>
            <p>예비 창업자가 어떤 상황에서 어떤 판단을 해야 하는지 정리하고, 이를 서비스 기능으로 바꿔요.</p>
          </div>
          <div className="card">
            <div className="num">디자인</div>
            <h3>복잡한 분석을<br />쉽게 전달</h3>
            <p>"위험", "주의", "검토 가능"처럼 데이터 전문가가 아니어도 이해할 수 있는 표현을 사용해요.</p>
          </div>
          <div className="card">
            <div className="num">영업·제휴</div>
            <h3>전문가풀<br />구축</h3>
            <p>창업 컨설턴트, 세무사, 노무사, 소상공인 지원기관, 창업보육센터, 공유주방, 상가 플랫폼과 협업해요.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

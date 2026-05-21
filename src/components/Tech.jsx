const steps = [
  { num: 'STEP 1', title: '손익분기점\n계산 기능' },
  { num: 'STEP 2', title: '주소지 기반\n폐업 이력 조회' },
  { num: 'STEP 3', title: '상권 위험도\n리포트' },
  { num: 'STEP 4', title: '리뷰 기반\n부검 리포트' },
  { num: 'STEP 5', title: '전문가 매칭\n및 결제 기능' },
  { num: 'STEP 6', title: '지식재산권\n확보 검토' },
]

const questions = [
  '이 매장은 하루에 몇 개를 팔아야 하나요?',
  '이 상권에서 유사 업종은 왜 폐업했나요?',
  '배달 비중이 높아도 수익이 남나요?',
  '월세와 인건비를 감당할 수 있나요?',
  '이 아이템은 이 입지에 적합한가요?',
]

export default function Tech() {
  return (
    <section id="tech">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">02 · 개발기술</span>
          <h2 className="section-title">기술개발 수준</h2>
          <p className="section-desc">
            기본 모델은 무료 폐업 리스트 조회와 창업 아이템별 유리한 상권 입지 제공,
            고급 모델은 부검 리포트와 전문가 매칭 서비스로 구성돼요.
          </p>
        </div>

        <div className="process">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.num}</div>
              <h4>{s.title.split('\n').map((line, j) => (
                <span key={j}>{line}{j === 0 && <br />}</span>
              ))}</h4>
            </div>
          ))}
        </div>

        <div className="callout">
          <h3>창업 판단을 '감'에서 '데이터'로 바꿔드려요.</h3>
          <p>창업자는 이제 "이 상권이 좋아 보인다"가 아닌, 하루 판매량·비용 구조·과거 폐업 원인을 확인하고 판단할 수 있어요.</p>
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '20px' }}>
          창업자가 반드시 확인해야 할 질문
        </h3>
        <div className="questions">
          {questions.map((q, i) => (
            <div className="q-item" key={i}>
              <span className="q-icon">Q.</span>
              {q}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const quarters = ["26' 1Q", "26' 2Q", "26' 3Q", "26' 4Q", "27' 1Q", "27' 2Q", "27' 3Q"]

const tasks = [
  { name: '서비스 상세 기획',          active: [0] },
  { name: '시장조사 및 데이터 항목 정의', active: [0, 1] },
  { name: 'MVP 개발',                  active: [1, 2] },
  { name: '폐업 이력 및 상권 데이터 연동', active: [2, 3] },
  { name: '부검 리포트 개발',           active: [3, 4] },
  { name: '베타서비스 운영',            active: [3, 4] },
  { name: '유료 리포트 및 구독 결제 적용', active: [4, 5] },
  { name: '전문가 매칭 서비스 구축',    active: [5, 6] },
  { name: '정식 서비스 출시',           active: [6] },
  { name: 'B2B·기관 제휴 확대',        active: [6] },
]

const scenarios = [
  {
    num: '시나리오 1',
    title: '데이터 확보가\n늦어질 경우',
    desc: '공공데이터와 사용자 입력값을 활용한 기본 손익분기점 계산 기능부터 우선 출시해요.',
  },
  {
    num: '시나리오 2',
    title: '개발 일정이\n늦어질 경우',
    desc: '핵심 기능(손익분기점·폐업 리스트·위험도 진단)만 먼저 제공하고, 전문가 매칭과 리뷰 분석은 후순위로 개발해요.',
  },
  {
    num: '시나리오 3',
    title: '유료 전환율이\n낮을 경우',
    desc: '무료 리포트 쿠폰, 샘플 리포트, 구독 할인, 창업 체크리스트 콘텐츠를 제공해 신뢰와 결제 전환을 높여요.',
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="grey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06 · 사업화 추진 일정</span>
          <h2 className="section-title">단계별<br />실행 계획</h2>
          <p className="section-desc">
            2026년 1분기 서비스 기획부터 2027년 3분기 정식 출시 및 B2B 제휴까지 단계적으로 추진해요.
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-grid">
            <div className="tl-header">내용</div>
            {quarters.map(q => <div className="tl-header" key={q}>{q}</div>)}
            {tasks.map((task, i) => (
              <>
                <div className="tl-task" key={`task-${i}`}>{task.name}</div>
                {quarters.map((_, qi) => (
                  <div className="tl-cell" key={`cell-${i}-${qi}`}>
                    {task.active.includes(qi) && <span className="tl-dot" />}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '64px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '24px' }}>
            사업계획 차질 시 대처방안
          </h3>
          <div className="grid-3">
            {scenarios.map((s, i) => (
              <div className="card" key={i}>
                <div className="num">{s.num}</div>
                <h3>{s.title.split('\n').map((line, j) => (
                  <span key={j}>{line}{j === 0 && <br />}</span>
                ))}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

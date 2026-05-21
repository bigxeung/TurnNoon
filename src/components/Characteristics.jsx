const items = [
  {
    title: '창업 전 위험을 알려줘요',
    desc: '창업 결정 전에 데이터로 위험 요인을 미리 확인할 수 있어요.',
  },
  {
    title: '손익분기점을 쉬운 문장으로 설명해요',
    desc: '복잡한 숫자가 아닌, 직관적인 표현으로 누구나 이해할 수 있게 전달해요.',
  },
  {
    title: '폐업 사례를 분석해 같은 실패를 줄여요',
    desc: '이미 폐업한 매장의 데이터를 분석해 과거의 실패가 반복되지 않도록 도와드려요.',
  },
  {
    title: '전문가 상담으로 연결돼요',
    desc: '세무사, 노무사, 창업 컨설턴트와 1:1로 연결되어 실질적인 도움을 받을 수 있어요.',
  },
  {
    title: '창업자의 생계 손실을 줄이는 데 초점을 둬요',
    desc: '창업을 많이 시키는 것이 아닌, 실패 가능성이 높은 창업을 줄이는 것이 목표예요.',
  },
]

export default function Characteristics() {
  return (
    <section className="grey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">사업내용 및 특성</span>
          <h2 className="section-title">TurnNoon만의<br />5가지 특성</h2>
        </div>
        <div className="num-list">
          {items.map((item, i) => (
            <div className="num-item" key={i}>
              <div className="num-circle">{i + 1}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const facilityRows = [
  { label: '서버', desc: '클라우드 서버, 데이터베이스, 백업 시스템' },
  { label: '개발환경', desc: '개발용 PC, 테스트 기기, 협업 도구' },
  { label: '데이터환경', desc: '상권 데이터, 폐업 이력 데이터, 리뷰 데이터 관리 환경' },
  { label: '운영환경', desc: '고객 문의 관리, 결제 관리, 전문가 매칭 관리' },
  { label: '제휴공간', desc: '전문가 상담을 위한 공유오피스 또는 제휴 공간' },
]

const fundingRows = [
  { cat: '임대', item: '공유오피스 및 상담 공간', amount: '20,000', note: '사무공간, 제휴 상담공간' },
  { cat: '시설', item: '개발 장비 및 테스트 기기', amount: '30,000', note: 'PC, 테스트 단말' },
  { cat: '시설', item: '사무 집기 및 협업 환경', amount: '10,000', note: '책상, 회의 장비' },
  { cat: '개발', item: 'MVP 및 웹서비스 개발', amount: '250,000', note: '프론트엔드, 백엔드, DB' },
  { cat: '개발', item: '데이터 분석 및 리포트 자동화', amount: '100,000', note: '위험도 산출, 리포트 생성' },
  { cat: '데이터', item: '상권·폐업·리뷰 데이터 확보', amount: '80,000', note: '데이터 구매, API 연동' },
  { cat: '서버', item: '클라우드 서버 및 보안 시스템', amount: '50,000', note: '서버, DB, 백업' },
  { cat: '홍보마케팅', item: 'SNS, 홈페이지, 콘텐츠 마케팅', amount: '200,000', note: '초기 사용자 확보' },
  { cat: '인건비', item: '개발자, PM, 디자이너, 영업·운영', amount: '180,000', note: '핵심 인력' },
  { cat: '운영', item: '전문가풀 구축 및 법률·회계 자문', amount: '50,000', note: '제휴, 계약, 검수' },
  { cat: '예비비', item: '사업 지연 및 확장 대응', amount: '380,000', note: '추가 데이터, 추가 개발' },
]

const raisingRows = [
  { cat: '자기 자금', item: '창업자 자체 부담금', amount: '0', note: '추후 확정' },
  { cat: '금융 차입', item: '중소벤처진흥공단 청년창업대출', amount: '100,000', note: '초기 운영자금' },
  { cat: '정부지원자금', item: '예비창업패키지 창업지원금', amount: '50,000', note: 'MVP 개발' },
  { cat: '기타', item: '신용보증기금', amount: '200,000', note: '운영 및 마케팅' },
  { cat: '기타', item: '시드투자 유치', amount: '1,000,000', note: '서비스 확장' },
]

export default function Finance() {
  return (
    <section id="finance">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">04 · 시설확보 및 재무계획</span>
          <h2 className="section-title">생산과<br />시설 확보 계획</h2>
          <p className="section-desc">
            TurnNoon은 온라인 플랫폼이므로 제조시설은 필요하지 않아요. 서비스 운영에 필요한 디지털 시설만 확보해요.
          </p>
        </div>

        <div className="table-wrap" style={{ marginBottom: '64px' }}>
          <table>
            <thead>
              <tr><th style={{ width: '160px' }}>구분</th><th>내용</th></tr>
            </thead>
            <tbody>
              {facilityRows.map((r, i) => (
                <tr key={i}>
                  <td><strong style={{ color: 'var(--text-900)' }}>{r.label}</strong></td>
                  <td>{r.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="section-header">
          <span className="section-tag">재무 전략</span>
          <h2 className="section-title">3개년 성장 로드맵</h2>
        </div>

        <div className="grid-3">
          <div className="card">
            <div className="num">2026년</div>
            <h3>1년차 ·<br />서비스 검증</h3>
            <p>초기 자금을 개발비, 인건비, 서버비, 데이터 확보비, 마케팅비에 집중 투입해요. 사용자 확보와 서비스 검증에 집중해요.</p>
          </div>
          <div className="card">
            <div className="num">2027년</div>
            <h3>2년차 ·<br />유료 전환</h3>
            <p>유료 리포트와 구독 전환율을 높여요. 수익 구조를 다각화하고 안정적인 매출 기반을 다져요.</p>
          </div>
          <div className="card">
            <div className="num">2028년</div>
            <h3>3년차 ·<br />B2B 확장</h3>
            <p>전문가용 B2B 서비스와 기관 제휴를 확대해 매출을 본격적으로 끌어올려요.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FundingPlan() {
  return (
    <section className="grey">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">05 · 재무계획</span>
          <h2 className="section-title">소요 자금 계획</h2>
          <p className="section-desc">총 13억 5천만 원의 자금이 필요해요.</p>
        </div>

        <div className="table-wrap" style={{ marginBottom: '48px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ width: '100px' }}>구분</th>
                <th>항목</th>
                <th style={{ textAlign: 'right', width: '140px' }}>금액 (천원)</th>
                <th style={{ width: '180px' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {fundingRows.map((r, i) => (
                <tr key={i}>
                  <td>{r.cat}</td>
                  <td>{r.item}</td>
                  <td className="amount">{r.amount}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
              <tr className="total">
                <td colSpan={2}>합계</td>
                <td className="amount">1,350,000</td>
                <td>13억 5천만 원</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section-header" style={{ marginTop: '48px' }}>
          <span className="section-tag">자금 조달</span>
          <h2 className="section-title">자금 조달 방법</h2>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ width: '140px' }}>구분</th>
                <th>항목</th>
                <th style={{ textAlign: 'right', width: '140px' }}>금액 (천원)</th>
                <th style={{ width: '180px' }}>비고</th>
              </tr>
            </thead>
            <tbody>
              {raisingRows.map((r, i) => (
                <tr key={i}>
                  <td>{r.cat}</td>
                  <td>{r.item}</td>
                  <td className="amount">{r.amount}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
              <tr className="total">
                <td colSpan={2}>합계</td>
                <td className="amount">1,350,000</td>
                <td>13억 5천만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

const rows = [
  {
    label: '매출액',
    bold: true,
    values: [
      { amount: '120,000', pct: '100.0', color: '' },
      { amount: '480,000', pct: '100.0', color: '' },
      { amount: '1,200,000', pct: '100.0', color: '' },
    ],
  },
  {
    label: '매출원가 (-)',
    values: [
      { amount: '36,000', pct: '30.0', color: '' },
      { amount: '120,000', pct: '25.0', color: '' },
      { amount: '300,000', pct: '25.0', color: '' },
    ],
  },
  {
    label: '판매관리비 (-)',
    values: [
      { amount: '300,000', pct: '250.0', color: '' },
      { amount: '420,000', pct: '87.5', color: '' },
      { amount: '600,000', pct: '50.0', color: '' },
    ],
  },
  {
    label: '영업이익',
    bold: true,
    values: [
      { amount: '-216,000', pct: '-180.0', color: 'var(--red)' },
      { amount: '-60,000', pct: '-12.5', color: 'var(--red)' },
      { amount: '300,000', pct: '25.0', color: 'var(--green)' },
    ],
  },
  {
    label: '영업외손익 (+,-)',
    values: [
      { amount: '0', pct: '0.0', color: '' },
      { amount: '0', pct: '0.0', color: '' },
      { amount: '0', pct: '0.0', color: '' },
    ],
  },
  {
    label: '경상이익',
    values: [
      { amount: '-216,000', pct: '-180.0', color: 'var(--red)' },
      { amount: '-60,000', pct: '-12.5', color: 'var(--red)' },
      { amount: '300,000', pct: '25.0', color: 'var(--green)' },
    ],
  },
  {
    label: '특별손익 (+,-)',
    values: [
      { amount: '0', pct: '0.0', color: '' },
      { amount: '0', pct: '0.0', color: '' },
      { amount: '0', pct: '0.0', color: '' },
    ],
  },
  {
    label: '법인세 등 (-)',
    values: [
      { amount: '0', pct: '0.0', color: '' },
      { amount: '0', pct: '0.0', color: '' },
      { amount: '60,000', pct: '5.0', color: '' },
    ],
  },
  {
    label: '당기순이익',
    total: true,
    values: [
      { amount: '-216,000', pct: '-180.0', color: 'var(--red)' },
      { amount: '-60,000', pct: '-12.5', color: 'var(--red)' },
      { amount: '240,000', pct: '20.0', color: 'var(--green)' },
    ],
  },
]

export default function IncomeStatement() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">추정손익계산서</span>
          <h2 className="section-title">3년 후<br />흑자 전환을<br />목표로 해요.</h2>
          <p className="section-desc">
            2026년 매출 1억 2천만 원에서 2028년 12억 원으로 성장하며, 2028년 24%의 순이익률을 달성할 계획이에요.
          </p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th style={{ textAlign: 'right' }}>2026년</th>
                <th style={{ textAlign: 'right' }}>%</th>
                <th style={{ textAlign: 'right' }}>2027년</th>
                <th style={{ textAlign: 'right' }}>%</th>
                <th style={{ textAlign: 'right' }}>2028년</th>
                <th style={{ textAlign: 'right' }}>%</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={row.total ? 'total' : ''}>
                  <td>
                    {row.bold || row.total
                      ? <strong style={{ color: 'var(--text-900)' }}>{row.label}</strong>
                      : row.label}
                  </td>
                  {row.values.map((v, j) => (
                    <>
                      <td key={`a${j}`} className="amount" style={v.color ? { color: v.color } : {}}>{v.amount}</td>
                      <td key={`p${j}`} className="amount" style={v.color ? { color: v.color } : {}}>{v.pct}</td>
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: '16px', color: 'var(--text-500)', fontSize: '13px', textAlign: 'right' }}>단위: 천원</p>
      </div>
    </section>
  )
}

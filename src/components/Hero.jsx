export default function Hero() {
  return (
    <header className="hero">
      <span className="hero-tag">창업 리스크 진단 플랫폼</span>
      <h1>
        창업하기 전,<br />
        <span className="accent">실패할 가능성</span>부터<br />
        확인하세요.
      </h1>
      <p className="sub">
        TurnNoon은 예비 창업자가 큰돈을 투자하기 전에<br />
        손익분기점·폐업 이력·상권 위험을 데이터로 진단하는 서비스예요.
      </p>
      <div className="hero-stats">
        <div className="stat-card">
          <div className="label">아이템명</div>
          <div className="value">TurnNoon</div>
        </div>
        <div className="stat-card">
          <div className="label">서비스 형태</div>
          <div className="value">웹 플랫폼</div>
        </div>
        <div className="stat-card">
          <div className="label">목표 사용자</div>
          <div className="value">예비 자영업자</div>
        </div>
      </div>
    </header>
  )
}

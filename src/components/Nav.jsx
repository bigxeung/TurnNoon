export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">Turn<span>Noon</span></div>
        <ul className="nav-links">
          <li><a href="#overview">서비스 개요</a></li>
          <li><a href="#tech">기술</a></li>
          <li><a href="#market">시장분석</a></li>
          <li><a href="#finance">재무계획</a></li>
          <li><a href="#schedule">일정</a></li>
        </ul>
      </div>
    </nav>
  )
}

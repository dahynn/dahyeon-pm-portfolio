import { TalentSymbol } from './TalentSymbol';

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="현대의 인재상에 연결한 일하는 방식">
    <ol>
      <li data-word="Challenge"><div className="strength-marker"><TalentSymbol value="challenge" /></div><div><h3>도전</h3><p>낯선 기술의 경계를 넘으며, 화면의 질문을 구현까지 연결합니다.</p></div></li>
      <li data-word="Communication"><div className="strength-marker"><TalentSymbol value="communication" /></div><div><h3>소통</h3><p>상대가 이해하는 언어로 기술을 풀어, 함께 움직일 기준을 만듭니다.</p></div></li>
      <li data-word="Creativity"><div className="strength-marker"><TalentSymbol value="creativity" /></div><div><h3>창의</h3><p>각자의 조건을 다시 읽어, 기존 선택지 밖의 해답을 실행합니다.</p></div></li>
    </ol>
  </section>;
}

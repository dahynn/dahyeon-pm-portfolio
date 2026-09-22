import { TalentSymbol } from './TalentSymbol';

export function PersonalStrengths() {
  return <section className="personal-strengths" aria-label="일하는 기준">
    <ol>
      <li><div className="strength-marker"><TalentSymbol value="discipline" /></div><div><h3>사용자 흐름을 끝까지 확인하는 PM</h3><p>기능을 만드는 데서 멈추지 않고, 사용자가 어떤 상태로 다음 단계에 도달하는지까지 확인합니다.</p></div></li>
      <li><div className="strength-marker"><TalentSymbol value="creative-thinking" /></div><div><h3>문제의 원인을 찾아 기준을 세우는 PM</h3><p>반복되는 문제는 임시로 덮기보다, 팀이 같은 기준으로 판단할 수 있는 구조로 다시 풀어냅니다.</p></div></li>
      <li><div className="strength-marker"><TalentSymbol value="sense-of-purpose" /></div><div><h3>고객의 다음 행동을 설계하는 PM</h3><p>기능 하나보다 고객이 서비스를 믿고 다음 단계로 갈 수 있는 경험을 만듭니다.</p></div></li>
    </ol>
  </section>;
}

/* oxlint-disable next/no-img-element -- 기존 투명 PNG 인재상 심볼을 재사용합니다. */
export type TalentValue = 'challenge' | 'communication' | 'creativity';

const labels: Record<TalentValue, string> = {
  challenge: '도전',
  communication: '소통',
  creativity: '창의',
};

const icons: Record<TalentValue, string> = {
  challenge: '/assets/talent-challenge.png',
  communication: '/assets/talent-communication.png',
  creativity: '/assets/talent-creativity.png',
};

export function TalentSymbol({ value }: { value: TalentValue }) {
  return <span className={`talent-symbol talent-symbol-${value}`} title={labels[value]}>
    <img src={icons[value]} alt="" aria-hidden="true" />
  </span>;
}

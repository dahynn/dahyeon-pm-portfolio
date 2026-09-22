export type TalentValue = 'discipline' | 'creative-thinking' | 'sense-of-purpose';

const labels: Record<TalentValue, string> = {
  discipline: '사용자 흐름 확인',
  'creative-thinking': '문제 기준 설계',
  'sense-of-purpose': '다음 행동 설계',
};

const numbers: Record<TalentValue, string> = {
  discipline: '01',
  'creative-thinking': '02',
  'sense-of-purpose': '03',
};

export function TalentSymbol({ value }: { value: TalentValue }) {
  return <span className={`talent-symbol talent-symbol-${value}`} title={labels[value]} aria-label={labels[value]}>{numbers[value]}</span>;
}

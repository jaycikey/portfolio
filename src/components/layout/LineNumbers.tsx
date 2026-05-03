interface Props {
  count?: number;
}

export default function LineNumbers({ count = 30 }: Props) {
  return (
    <div
      className="line-numbers w-10 shrink-0 select-none border-r border-border py-4 pr-3 text-right font-mono text-sm leading-6 text-muted opacity-50"
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}

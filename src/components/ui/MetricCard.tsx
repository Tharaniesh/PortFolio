type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="surface-panel flex min-h-[128px] flex-col justify-between rounded-[1.75rem] p-5">
      <span className="text-sm uppercase tracking-[0.24em] text-cyan-200/65">Signal</span>
      <div className="space-y-2">
        <p className="text-3xl font-semibold tracking-tight text-white">{value}</p>
        <p className="text-sm leading-6 text-slate-300">{label}</p>
      </div>
    </div>
  );
}

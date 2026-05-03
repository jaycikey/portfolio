export default function EmptyFileState() {
  return (
    <>
      <div className="empty-state-desktop flex flex-col items-center gap-2 font-mono text-sm text-muted">
        <span>{'// select a file from the sidebar'}</span>
        <span className="text-xl text-border">←</span>
      </div>
      <div className="empty-state-mobile font-mono text-sm text-muted" style={{ display: 'none' }}>
        <span>{'// tap _files below to select'}</span>
        <span className="text-xl text-border">↓</span>
      </div>
    </>
  );
}

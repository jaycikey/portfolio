import Token from '@/components/editor/Token';
import { certs, CERT_STATUS } from '@/data/certs';
import { SH } from '@/lib/syntax-tokens';

export default function CertRoadmapContent() {
  return (
    <div className="font-mono">
      {/* Header comments */}
      <div className="mb-6 leading-[1.8]">
        <div>
          <Token color={SH.comment}>{'// Certification roadmap'}</Token>
        </div>
        <div>
          <Token color={SH.comment}>
            {'// Field Tech → DevOps / Cloud transition'}
          </Token>
        </div>
        <div>
          <Token color={SH.comment}>{'// Updated: May 2026'}</Token>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-9">
        {/* Vertical line */}
        <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border" />

        <div className="flex flex-col gap-6">
          {certs.map((cert) => {
            const { icon, color } = CERT_STATUS[cert.status];
            return (
              <div key={cert.id} className="relative">
                {/* Status icon on the line */}
                <div
                  className="absolute -left-9 top-px z-[1] flex h-[22px] w-[22px] items-center justify-center bg-surface font-mono text-sm"
                  style={{ color }}
                >
                  {icon}
                </div>

                {/* Cert info */}
                <div>
                  <div className="mb-0.5 text-sm text-white">{cert.name}</div>
                  <div className="mb-[3px] text-xs text-muted">
                    {cert.issuer} · target: {cert.target}
                  </div>
                  <div className="mb-1 text-[11px]" style={{ color }}>
                    {cert.status}
                  </div>
                  <div className="text-[13px] leading-[1.6] text-muted">
                    {cert.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer comments */}
      <div className="mt-8 leading-[1.8]">
        <div>
          <Token color={SH.comment}>{'// next milestone: Network+ exam'}</Token>
        </div>
        <div>
          <Token color={SH.comment}>
            {'// progress: ~60% through study materials'}
          </Token>
        </div>
      </div>
    </div>
  );
}

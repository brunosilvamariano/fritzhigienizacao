import { developer } from '@/config/developer';
import { Arrow } from '@/components/ui/arrow';

export function GoogleProfile() {
  return (
    <aside
      className="google-profile tw:shrink-0 tw:my-[24px]"
      aria-labelledby="google-profile-title"
    >
      <span className="google-profile-label tw:uppercase">
        Móveis planejados
      </span>
      <h2 id="google-profile-title">Seu espaço. Seu traço.</h2>
      <div className="google-review-heading tw:flex tw:gap-[8px] tw:mb-[16px] tw:text-paper">
        <span className="google-wordmark">Google</span>
        <span>Avaliações</span>
      </div>
      <a
        className="google-action tw:min-h-[54px] tw:flex tw:items-center tw:justify-between tw:gap-[12px] tw:mt-[8px]"
        href={developer.googleReview}
        target="_blank"
        rel="noopener noreferrer"
      >
        Avaliar no Google <Arrow />
      </a>
      <a
        className="google-action tw:min-h-[54px] tw:flex tw:items-center tw:justify-between tw:gap-[12px] tw:mt-[8px] google-action-primary tw:bg-taupe tw:text-ink"
        href={developer.googleProfile}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil no Google <Arrow />
      </a>
    </aside>
  );
}

import { developer } from '@/config/developer';
import { Arrow } from '@/components/ui/arrow';
export function GoogleProfile() {
  return (
    <aside className="google-profile" aria-labelledby="google-profile-title">
      <span className="google-profile-label">Móveis planejados</span>
      <h2 id="google-profile-title">Seu espaço. Seu traço.</h2>
      <div className="google-review-heading">
        <span className="google-wordmark">Google</span>
        <span>Avaliações</span>
      </div>
      <a
        className="google-action"
        href={developer.googleReview}
        target="_blank"
        rel="noopener noreferrer"
      >
        Avaliar no Google <Arrow />
      </a>
      <a
        className="google-action google-action-primary"
        href={developer.googleProfile}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil no Google <Arrow />
      </a>
    </aside>
  );
}

import Image from 'next/image';
import fritzLogo from '@/assets/images/shared/fritz/fritz-mark.png';

export function Brand() {
  return (
    <a
      className="brand tw:flex tw:items-center"
      href="/#inicio"
      aria-label="Fritz Higienização — início"
    >
      <Image src={fritzLogo} alt="" width={44} height={44} priority />
      <div className="brand-copy">
        FRITZ
        <small>Higienização e impermeabilização</small>
      </div>
    </a>
  );
}

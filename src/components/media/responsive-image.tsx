import { getImageProps, type StaticImageData } from 'next/image';

type Props = {
  desktop: StaticImageData;
  tablet: StaticImageData;
  mobile: StaticImageData;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
  onLoad?: () => void;
};
export function ResponsiveImage({
  desktop,
  tablet,
  mobile,
  alt,
  className,
  eager = false,
  sizes,
  onLoad,
}: Props) {
  const common = {
    alt,
    quality: 85,
    loading: eager ? ('eager' as const) : ('lazy' as const),
    fetchPriority: eager ? ('high' as const) : ('auto' as const),
  };
  const large = getImageProps({
    ...common,
    src: desktop,
    sizes: sizes ?? '(min-width: 1600px) 960px, 62vw',
  }).props;
  const medium = getImageProps({
    ...common,
    src: tablet,
    sizes: sizes ?? '100vw',
  }).props;
  const small = getImageProps({
    ...common,
    src: mobile,
    sizes: sizes ?? '100vw',
  }).props;
  return (
    <picture className={className}>
      <source
        media="(min-width: 1024px)"
        srcSet={large.srcSet}
        sizes={large.sizes}
        width={desktop.width}
        height={desktop.height}
      />
      <source
        media="(min-width: 768px)"
        srcSet={medium.srcSet}
        sizes={medium.sizes}
        width={tablet.width}
        height={tablet.height}
      />
      <img
        {...small}
        alt={alt}
        onLoad={onLoad}
        ref={
          onLoad
            ? (image) => {
                if (image?.complete && image.naturalWidth > 0) onLoad();
              }
            : undefined
        }
        draggable={false}
      />
    </picture>
  );
}

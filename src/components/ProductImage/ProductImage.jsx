
export default function ProductImage ({className, altText, mobileImage, desktopImage }) {
  return (
    <picture >
      <source
        media="(max-width: 768px)"
        srcSet={mobileImage + " 768w"}
        sizes="768px"
      />
      <source
        srcSet={desktopImage + " 1280w"}
        sizes="1280px"
      />
      <img className={className} src={desktopImage + ""} alt={altText} />
    </picture>
  );
}
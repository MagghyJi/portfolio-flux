import Image from "next/image";

export default function FullWidthImage() {
  return (
    <section className="relative w-full overflow-hidden aspect-[1440/900]">
      <Image
        src="/section-full-width-image.png"
        alt="H.Studio photography"
        fill
        className="object-cover object-center"
      />
    </section>
  );
}

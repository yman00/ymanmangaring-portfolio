import Socials from "@/components/socials";

export default function Footer() {
  return (
    <section id="footer" className="h-30 bg-[#121212] flex flex-col items-center justify-center gap-2">
      <Socials className="text-white"/>
      <p className="text-white text-sm sm:text-base">© 2025 Yman Mangaring. All rights reserved</p>
    </section>
  );
}

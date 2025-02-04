import Section from "./section";

export default function Projects() {
  const isDesktop = true;

  return (
    <div className="h-screen flex justify-center px-10">
      <Section isDesktop={isDesktop} />
    </div>
  );
}
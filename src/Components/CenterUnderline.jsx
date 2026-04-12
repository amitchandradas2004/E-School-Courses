export default function CenterUnderline({ text }) {
  return (
    <span className="relative inline-block group cursor-pointer">
      <span className="relative z-10">{text}</span>
      <span className="absolute left-1/2 bottom-0 h-[2.5px] w-0 bg-green-600  transition-all duration-400 group-hover:w-full group-hover:left-0"></span>
    </span>
  );
}

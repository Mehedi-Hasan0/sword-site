export default function FullWidthBorder() {
  return (
    <div className="flex items-center">
      <div className="w-[60%] h-[3px] bg-purple" />
      <div className="w-[30%] h-[3px] bg-transparent" />
      <div className="w-[10%] h-[3px] bg-[#2C98CF]" />
    </div>
  );
}

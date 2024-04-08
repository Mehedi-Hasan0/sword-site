export default function FullWidthBorder({ reversed = false }) {
  return (
    <>
      {reversed ? (
        <div className="flex items-center w-full h-[3px] absolute top-0 left-0">
          <div className="w-[10%] h-[3px] bg-[#2C98CF]" />
          <div className="w-[30%] h-[3px] bg-transparent" />
          <div className="w-[60%] h-[3px] bg-purple" />
        </div>
      ) : (
        <div className="flex items-center">
          <div className="w-[60%] h-[3px] bg-purple" />
          <div className="w-[30%] h-[3px] bg-transparent" />
          <div className="w-[10%] h-[3px] bg-[#2C98CF]" />
        </div>
      )}
    </>
  );
}

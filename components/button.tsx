import getLuma from "@/utils/luma";

const Button = ({
  text,
  secondaryText,
  color = "#070707"
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  const luma = getLuma(color);
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`flex items-center gap-2 px-3 py-1 text-sm font-medium ${luma ? 'text-white' : 'text-black'} rounded-lg max-w-fit`}
    >
      <span>{text}</span>
      {secondaryText ? (
        <span className="font-light opacity-80">{secondaryText}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;

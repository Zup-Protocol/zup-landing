import Link from "next/link";
import Image from "next/image";
import btnIcon from "public/assets/icons/btnIcon.svg";

const buttonStyles = [
  "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]",
  "text-[var(--black)] rounded-xl hover:bg-[var(--purple)]",
  "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]",
];

export default function Button({ url, text, variant }) {
  const style = buttonStyles[variant] || buttonStyles[0];
  return (
    <button className={`${style} cursor-pointer px-4 py-2 transition-colors duration-200`}>
      <Link href={url} className="flex flex-row items-center justify-center  gap-2">
        {text}
        <Image src={btnIcon} alt="" />
      </Link>
    </button>
  );
}
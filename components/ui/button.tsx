import Image from "next/image";
import Link from "next/link";
import btnIcon from "public/assets/icons/btnIcon.svg";

// Objeto para armazenar as variantes do botão
// Cada variante contém seu estilo de botão e a classe para o ícone.
const buttonVariants = {
  primary: {
    style: "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]",
    iconClass: "invert brightness-0", // Ícone branco para o botão primário
  },
secondary: {
  style: "text-[var(--purple)] rounded-xl hover:bg-[var(--purple)] hover:text-white",
  iconClass: "brightness-100 group-hover:invert group-hover:brightness-0", 
},
  tertiary: {
    style: "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]",
  },
};

export default function Button({ url, text, variant = "primary" }) {
  // Define 'primary' como a variante padrão se nenhuma for passada
  // Busca a variante no objeto, ou usa a 'primary' como fallback
  const selectedVariant = buttonVariants[variant] || buttonVariants.primary;

  return (
    <button
      className={`${selectedVariant.style} cursor-pointer px-4 py-2 transition-colors duration-200 group`}
    >
      <Link href={url} className="flex flex-row items-center justify-center gap-2">
        {text}
        <Image
          src={btnIcon}
          alt=""
          // A classe é aplicada dinamicamente com base na variante
          // Para o secundário, o ícone vira branco no hover
          className={`${selectedVariant.iconClass}`}
          // className={`${
          //   selectedVariant.iconClass === "invert brightness-0" ? "invert brightness-0" : "brightness-100"
          // } ${selectedVariant.iconClass === "brightness-100" ? "group-hover:invert brightness-0" : ""}`}
        />
      </Link>
    </button>
  );
}
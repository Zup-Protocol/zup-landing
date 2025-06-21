import Link from "next/link";
import Image from "next/image";
import btnIcon from "public/assets/icons/btnIcon.svg";

// Objeto para armazenar as variantes do botão
// Cada variante contém seu estilo de botão e a classe para o ícone.
const buttonVariants = {
  primary: {
    style: "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]",
    iconClass: "", // O ícone não é invertido por padrão
  },
  secondary: {
    style: "text-[var(--purple)] rounded-xl hover:bg-[var(--purple)] hover:text-white",
    iconClass: "invert", // O ícone é invertido na variante secundária
  },
  tertiary: {
    style: "bg-[var(--purple-dark)] text-white rounded-xl hover:bg-[var(--purple)]", // O ícone é invertido na variante terciária
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
          // A classe 'invert' é aplicada dinamicamente com base na variante
          // A classe 'group-hover:invert-0' garante que o ícone fique branco no hover
          className={`group-hover:invert-0 ${selectedVariant.iconClass}`}
        />
      </Link>
    </button>
  );
}
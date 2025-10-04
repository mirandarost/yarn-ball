import clsx from 'clsx';
import Link from 'next/link';


const buttonColors = {
    bg : 'bg-emerald-900',
    hover: 'bg-emerald-800',
    active: 'bg-emerald-700'
}

const buttonStyling = `items-center 
            justify-center 
            rounded-lg 
            py-2.5 
            px-4 
            text-sm 
            font-bold
            text-white 
            transition-colors 
            focus-visible:outline 
            focus-visible:outline-offset-2 
            ${buttonColors.bg}
            ${buttonColors.hover}
            ${buttonColors.active}`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        buttonStyling, 
        className,
      )}
    >
      {children}
    </button>
  );
}

interface RoutingButtonProps {
  children?: React.ReactNode,
  route: string
}

export function RoutingButton({children, route}: RoutingButtonProps) {
  return(
    <Link 
      href={route}
      className={buttonStyling}
    >
    {children}
    </Link>
  )
}

interface LinkButtonProps {
  children?: React.ReactNode,
  link:string
}

export function LinkButton({children, link}: LinkButtonProps) {
  return(
    <a
      href={link}
      className={buttonStyling}
      >
    {children}
    </a>
  )

}
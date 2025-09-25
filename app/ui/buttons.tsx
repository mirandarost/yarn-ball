import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 text-sm font-bold text-white transition-colors focus-visible:outline focus-visible:outline-offset-2  bg-emerald-900 hover:bg-emerald-800 active:bg-emerald-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
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
      className='items-center justify-center rounded-lg py-2.5 px-4 text-sm font-bold text-white transition-colors focus-visible:outline focus-visible:outline-offset-2  bg-emerald-900 hover:bg-emerald-800 active:bg-emerald-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
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
      className='items-center justify-center rounded-lg py-2.5 px-4 text-sm font-bold text-white transition-colors focus-visible:outline focus-visible:outline-offset-2  bg-emerald-900 hover:bg-emerald-800 active:bg-emerald-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
      >
    {children}
    </a>
  )

}
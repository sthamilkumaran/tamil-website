import clsx from 'clsx'
import SocialMedia from "./SocialMedia"
import Yarlithublogo from './Yarlithublogo'
import Ukilogo from './Ukilogo'
import Ukiadd from './Ukiadd'
export interface Props {
  className?: string
}

const Footer = ({ className }: Props) => {
  return (
    <div
     className={clsx(
       className,
       "bg-white-600",
       "flex flex-nowrap justify-between",
       "py-7"
     )}
   >
     <div className="container mx-auto px-8 lg:px-16 py-8 gap-8 flex max-w-4xl flex-wrap">
       
       <Yarlithublogo/>
       <Ukilogo/>
       <Ukiadd/>
     </div>
     
     <SocialMedia />
   </div>
  )
}

export default Footer

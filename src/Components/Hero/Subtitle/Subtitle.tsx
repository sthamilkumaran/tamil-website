import clsx from 'clsx'
import Typed from 'react-typed'

export interface Props {
  className?: string
}

const Subtitle = ({ className }: Props) => {
  return (
    <div className={clsx(className,"px-2")}>
      <Typed 
      className='flex justify-center text-2xl'
      strings={['React developer','Uki student','Cricket player']}
      loop
      typeSpeed={30}/>
    </div>
  )
}

export default Subtitle

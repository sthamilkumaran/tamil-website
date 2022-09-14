import clsx from 'clsx'

export interface Props {
  className?: string
}

const Biography = ({ className }: Props) => {
  return (
    <div className={clsx(className,"flex justify-center",
    " bg-white-900",
    "flex container my-8 mx-auto p-12 max-w-lg",
    "border-solid border-1 border-black-900",
    "rounded-md",
   "drop-shadow-5xl",
   "w-66 h-98 bg-sky-400",
   "rounded-md",
   
)}>
      <span>
        <p>I'm tamilkumaran. i'm studying in UKI codding school.i am maths student and also I am studying progrmming languages both frontend and backend here.I am instrested in It field. So I will apply for a best CS company to continue my career .You can contact me with <a href='balapriyanka70@gmail.com'></a> </p>
      </span>
    </div>
  )
}

export default Biography

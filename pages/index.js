import Link from "next/link"

export default function Home() {
  return (
    <>
      <section className="h-full w-full flex container mx-auto items-center justify-center">
        <div className="flex flex-col justify-center w-max">
          <span className="mb-4 font-bold">Hi there, I am</span>
          <h1>Pascal Nkornyui</h1>
          <h1 className="text-secondary-300 my-6">I Build <span className='gradient-text'>{ "{ Software }" }</span>.</h1>
          <p className="max-w-lg my-4">
            I’m a software developer specializing in building and designing exceptional programs and software for web, mobile and desktop. 
          </p>
          <Link class='w-max py-4 px-10 border-[1px] rounded-md font-bold border-primary-500 hover:bg-primary-500/40' href='/about'>About Me</Link>
        </div>
      </section>
    </>
  )
}

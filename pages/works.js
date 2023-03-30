import Image from "next/image";
import Link from "next/link"

const Works = () => {
    return (
        <section className="p-4 mb-[100px]">
            <div className='mt-16 flex flex-col items-center gap-4'>
                <h2>My Works</h2>
                <div className='w-full flex flex-col gap-4 sm:grid grid-col-3 grid-row-3 grid-rows-4 grid-flow-col'>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto sm:row-span-2 rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/vercel.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/visual-json_01.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/redwood.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/blogr.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/bot_01.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/pdec.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                    <Link className='project-card bg-secondary-600 aspect-video sm:aspect-auto rounded-lg' href='./'>
                        <Image className='h-max w-max rounded-lg' alt='test' width={500} height={50} src="/projects/setifi_01.png"></Image>
                        <div className="p-4 bg-clip-content ">
                            <h3>Visual Json</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Works;
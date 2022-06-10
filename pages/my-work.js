import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaCode, FaSpinner, FaArrowCircleDown, } from 'react-icons/fa'

const MyWork = () => {
  const [isfetchSuccessful, setIsfetchSuccessful] = useState(false)
  const [isfetching, setIsfetching] = useState(false)
  const [renderedRepos, setRenderedRepos] = useState([])

  const LoadRepos = async () => {
    setIsfetching(true)
    try {
      let repos = []
      await fetch('https://api.github.com/users/pascall-de-creator/repos?sort=-stargazers_count,forks,watchers')
        .then(response => response.json())
        .then(data => {
        for (let index = 0; index < data.length; index++) {
          let repoCardComp = (
              <Link href={data[index].html_url}>
                <a key={ data[index].id } className="p-4 bg-slate-700 rounded-md shadow-md flex flex-col items-center hover:scale-105 cursor-pointer">
                  <div className="w-max h-max p-4 mb-2 rounded-full bg-primary text-white text-xl"><FaCode /></div>
                  <h3 className='text-xl text-primary mb-2 text-center'>{ data[index].name }</h3>
                  <p className='text-base text-white text-center text-ellipsis overflow-hidden w-full max-h-[4.5rem]'>{ data[index].description != null? data[index].description : `This Repository does not have a description yet click for the readme` }</p>
                </a>
              </Link>
          )
          repos.push(repoCardComp)
        }
      })
      setRenderedRepos(repos)
      setIsfetchSuccessful(true)
    } 
    catch {
      setIsfetchSuccessful(false)
    }
    setIsfetching(false)
  }

  useEffect(() => {
    LoadRepos()
  },[])

  return (
    <>
      <Head>
        <title>Pascall de creator | My Works</title>
      </Head>
      <section className="container mx-auto flex flex-col items-center">
        <p className="text-3xl text-primary ml-2 h-max mt-5">Gallary</p>
        <div className="container mx-auto flex flex-col items-center justify-center overflow-hidden pb-[95px]">
          {
          isfetchSuccessful?
          <>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-2 m-3 mb-5">
              { renderedRepos }
            </div>
          </>
          :
          <div className="flex flex-col items-center justify-center mt-5">
            <button className="p-2 flex items-center bg-primary text-white rounded-md mb-5 hover:bg-cyan-500" onClick={() => LoadRepos()} ><span>{ !isfetching && "Retry" }</span>{isfetching? <div className="animate-spin"><FaSpinner /></div> : <div className="ml-2"><FaArrowCircleDown /></div> }</button>
          </div>
          }
        </div>
      </section>
    </>
  );
}
   
  export default MyWork;
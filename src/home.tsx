import joseCircleSm from './assets/jose-circle-sm.png';

function Home() {
  return (
    <div className="bg-dark w-[100vw] h-[100vh] text-white">
       <div className='bg-code bg-no-repeat w-[100vw] h-[20vh] pt-[90px] w-screen'>
          <div className='flex w-[100%] ml-2 justify-between pr-4 text-white items-center'>
            <img src={joseCircleSm} className='w-[100px] h-[100px]' alt='imagem de josé carlos teles' />
            
            <div className="flex flex-col items-end">
              <h1 className='font-bold font-poppins text-2xl'>José Carlos Teles</h1>
              <h2>fullstack developer</h2>
              <span className='text-green-700'>devjosecarlosteles@gmail.com</span>
            </div>
          </div>

          <div className='pl-4'>
            <p className='pt-2'>
              Olá sou José Carlos Teles, desenvolvedor DevOps mas também atuo como backend e mentor de Programação, fui finalista no Show Me The Code (rocketseat) primeiro reality de programação da América Latina.
            </p>

           <h2 className='pt-4 font-bold'>Tecnologias</h2>
          </div>
       </div>
    </div>
  )
}

export default Home

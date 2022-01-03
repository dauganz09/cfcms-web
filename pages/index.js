import Head from 'next/head'
import Container from '../components/Container'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Stats from '../components/Stats'


export default function Home() {
  return (
    <Container>
      <Stats/>
       
       <main className='grid lg:grid-cols-4 gap-4 sm:grid-cols-1 '>
          {/* main content */}
            <div className='lg:col-span-3  rounded-md'>
                Main Graph
            </div>

          {/* side widgets */}
         
          <div className='    rounded-md'>
               side widgets
            </div>
         
       </main>

    </Container>
  )
}

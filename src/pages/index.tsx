import Head from 'next/head'
import { ContentFullStack } from '../components/ContentFullStack'
import { CustomerComments } from '../components/CustomerComments'
import { Menu } from '../components/Menu'
import { MyWork } from '../components/MyWork'
import { useMenuContext } from '../context/MenuContext'
import styles from './home.module.css';
import classNames from 'classnames'


export default function Home() {

  const { isOpenMenu } = useMenuContext()

  return (
    <div>
      <Head>
        <title>Home | Engetop</title>
      </Head>
      {
        isOpenMenu ?
          <Menu />
          :
          <div className='py-5 overflow-x-hidden h-100vh mt-20'>
            <div className={classNames("flex flex-col lg:flex-row justify-between items-center mx-auto max-w-[1114px] px-4", styles.animate)}>
              <div className='flex flex-col items-center lg:items-start'>
                <h1 className='text-cyan-500 font-semibold text-3xl'>ENGETOP</h1>
                <h2 className='font-bold text-4xl lg:text-6xl text-center sm:text-start my-6'>ENGENHARIA</h2>

                <a href="https://www.instagram.com/engetop_am/" target="_blank">
                  <button className='py-4 px-12 bg-cyan-500 hover:bg-cyan-600 transition-colors rounded-full text-gray-900 font-bold text-lg'>
                    Saiba mais
                  </button>
                </a>
              </div>


              <img src="/imagem-principal03.jpg" alt="codando" className={styles.animate} />

            </div>

            <ContentFullStack />

            <MyWork />

          </div>
      }
    </div>

  )
}

import Providers from '@/components/Providers'
import { cn } from '@/lib/utis'
import '@/styles/global.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets:['latin']})

export default function RootLayout ({
    children,
}:{
    children: React.ReactNode

}){
    return(
        <html lang = "eng" className={cn('bg-white text-slate-900 antialiased', inter.className)}>
            <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>

                <Providers>{children}
                
                </Providers>
               
        <div className='h-40 md:hidden' ></div>

            </body>
        </html>    
    )
}
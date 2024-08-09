import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5'>
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    Cara untuk berubah : {' '}<span className='underline text-blue'>Dipaksa keadaan {' '}</span>
                    or{' '}
                    <span className='underline text-blue'>Sukarela melakukan.</span>{' '}
                    Pilihan ada padamu.
                </p>
                <p className="font-semibold text-gray text-xs">
                    Atau minta di sepertiga malam terakhir
                </p>
                <div className='bg-neutral-700 mv-5 h-[1px]'/>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">
                        Copyright @ 2024 Annelies inc. Just copying from youtube stuff.
                    </p>
                    <div className="flex">
                        {footerLinks.map((link, i)=>(
                            <p key={link} className='font-semibold text-gray text-xs cursor-pointer'>{link}{' '}{i !== footerLinks.length - 1 && (<span className='mx-2'> | </span>
                            )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
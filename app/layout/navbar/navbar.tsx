'use client';

import Link from 'next/link';
import { FC } from 'react';

interface INavbarModel { }

const Navbar: FC<INavbarModel> = ({ }) => {
    return (
        <header className='bg-slate-400 font-bold'>
            <nav className='p-4'>
                <div className="flex justify-end">
                    <Link className='mr-4' href={'/'} locale='es'>es</Link>
                    <Link className='mr-4' href={'/'} locale='en'>en</Link>
                    <Link className='mr-4' href={'/'} locale='he'>he</Link>
                    <Link className='mr-4' href={'/'} locale='ru'>ru</Link>
                </div>
                <div className="flex justify-start uppercase">
                    <div className="mr-4">
                        <Link href={'/'}>home</Link>
                    </div>
                    <div className="mr-4">
                        <Link href={'/about'}>about</Link>
                    </div>
                    <div className="mr-4">
                        <Link href={'/contact'}>contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
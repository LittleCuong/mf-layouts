import React from 'react'

import 'tailwindcss/tailwind.css'

export default function Header() {
    return (
        <header className='flex justify-between align-middle p-4 bg-amber-200 text-white w-100 shadow-lg'>
            <h1 className='w-full text-center'>
                <a href='/'>
                    <h1 className='text-black text-2xl font-bold'>Legendary Cooking Recipes</h1>
                </a>
            </h1>
        </header>
    )
}
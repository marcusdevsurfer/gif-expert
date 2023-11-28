import React from 'react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const API_KEY = '33GpYssO1A3HubGVinqOMB7bVLSy7VNQ'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>Gif Expert App</h1>


            <AddCategory
                onNewCategory={onAddCategory}
            />

                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category}/>
                    ))
                }
        </>
    )
}

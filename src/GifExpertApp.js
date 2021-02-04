import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    // const handelAdd = ()=> {
    //     setCategories(['HunterXHunter', ...categories]);
    // }

    return (

        <>
            <h1>GIF FINDER</h1>

            <AddCategory setCategories={ setCategories }/>

            <ol>
                {
                    categories.map(category =>
                        <GifGrid 
                        key={category}
                        category={category} />
                        )
                }
            </ol>

        </>

    )

}

export default GifExpertApp
import React, { useState } from 'react';


export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Second Punch', 'Newell´s Old Boys'];
    const [categories, setCategories] = useState(['One Punch', 'Second Punch', 'Newell´s Old Boys']);

    const handleAdd = () => {
        // setCategories( [...categories, 'La Lepra'] );
        // setCategories( ['La Lepra', ...categories ] );

        setCategories(cats => [...cats, 'La Lepra']);
        console.log(categories);
    }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={handleAdd}>Agregar</button>

            <ol>
                {
                    categories.map( (category, i) => {
                        return <li key={category}>{category}</li>
                    } )
                }
            </ol>
        </>
    )
}
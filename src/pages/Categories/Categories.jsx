import React, {useState, useEffect} from 'react';
import {mainWrapper, categoriesContainer} from './categories.module.css';
import Category from '../../components/Category/Category.jsx';

const Categories = () => {

useEffect(() => {
    const fetchCategories = async () => {
        const data = await fetch(
            'https://api.thecatapi.com/v1/categories', {
                method: 'GET',
                headers: {
                'x-api-key':  'a8bd2acd-8172-4346-a1cf-384b26f1fafc'
                }
            }
        );
        
        const response = await data.json();
        setCategories(response);
        setLoaded(true);
    
    };
    fetchCategories();
}, []);


const [categories, setCategories] = useState([]);
const [loaded, setLoaded] = useState(false);

    if (loaded) {
        return (
            <main className={mainWrapper}>
                <h2>Select a Category</h2>
        
                <div className={categoriesContainer}>
                    {categories.map(category => (
                        <Category name={category.name} key={category.id}  id={category.id} />
                    ))}
                </div>
        
            </main>
        );
    } else {
        return (
            <h2>Loading</h2>
        );
    }

}

export default Categories;
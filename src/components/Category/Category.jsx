import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {imgContainer, categoryName, imageStyle} from './category.module.css';

const CategoryItem = ({name, id}) => {

  useEffect(() => {
    const fetchCategoryImages = async (id) => {

      const data = await fetch(
          `https://api.thecatapi.com/v1/images/search?category_ids=${id}`, {
              method: 'GET',
              headers: {
              'x-api-key':  'a8bd2acd-8172-4346-a1cf-384b26f1fafc'
              }
          }
      );
      
      const response = await data.json();
      setImage(response[0].url);
      
  }
  fetchCategoryImages(id)
  }, [id])

  const [image, setImage] = useState('');




  return (
    <Link to={`vote/${name}/${id}`}>
      <div className={imgContainer}>
          <div className={imageStyle} style={{backgroundImage: 'url('+ image +')'}}></div>
          <div className={categoryName}>
              {name}
          </div>
      </div>
    </Link>
    
  );

}

export default CategoryItem;
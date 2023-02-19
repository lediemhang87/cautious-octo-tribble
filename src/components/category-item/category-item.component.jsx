import './category-item.component.scss'

const CategoryItem = ({category}) => {

    const {title, url} = category;
    
    return(
        <div className='category-container'>
            <div 
                className='background-image' 
                style={{backgroundImage: `url(${url})`}}
            /> 
            <div className='category-body-container'>
                <h2> {title} </h2>
                <p> Shop now </p>
            </div>
        </div>
    )
   
}

export default CategoryItem;
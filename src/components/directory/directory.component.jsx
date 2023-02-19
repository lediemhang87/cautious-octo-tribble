import CategoryItem from '../category-item/category-item.component.jsx'

const Directory = ({category}) => (
    <div className='categories-container'>
        {category.map((category) => (
            <CategoryItem key={category.id} category={category}/>
        )
        )} 
    </div>
)

export default Directory



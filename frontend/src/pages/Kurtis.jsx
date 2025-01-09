import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'  // Import Link from react-router-dom
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Kurtis = () => {
  const { products } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState(products)
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    const selectedCategory = e.target.value
    if (category.includes(selectedCategory)) {
      setCategory(prev => prev.filter(item => item !== selectedCategory))
    } else {
      setCategory(prev => [...prev, selectedCategory])
    }
  }

  const toggleSubCategory = (e) => {
    const selectedSubCategory = e.target.value
    if (subcategory.includes(selectedSubCategory)) {
      setSubCategory(prev => prev.filter(item => item !== selectedSubCategory))
    } else {
      setSubCategory(prev => [...prev, selectedSubCategory])
    }
  }

  const applyFilter = () => {
    let filteredProducts = products.slice()

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter(item => category.includes(item.category))
    }

    if (subcategory.length > 0) {
      filteredProducts = filteredProducts.filter(item => subcategory.includes(item.subcategory))
    }

    setFilterProducts(filteredProducts)
  }

  const sortProduct = () => {
    let sortedProducts = [...filterProducts]
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      default:
        sortedProducts = [...filterProducts]
    }
    setFilterProducts(sortedProducts)
  }

  useEffect(() => {
    applyFilter()
  }, [category, subcategory])

  useEffect(() => {
    sortProduct()
  }, [sortType, filterProducts])

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-6'>
      <div className='min-w-60'>
        <p
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={toggleFilter}
        >
          FILTER
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </label>
            <label className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />Kids
            </label>
          </div>
        </div>
      </div>
      

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          {/* <Title text1={'ALL'} text2={'COLLECTION'} /> */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        
        

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((product, index) => (
            
            <Link to={`/product/${product._id}`} key={index}> {/* Use _id here instead of id */}
  <ProductItem
    name={product.name}
    id={product._id} // Pass _id here to ProductItem as well
    price={product.price}
    image={product.image[0]}
  />
</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Kurtis

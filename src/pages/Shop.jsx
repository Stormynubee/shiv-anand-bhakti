import React, { useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ui/ProductCard';
import PageTransition from '../components/layout/PageTransition';
import './Shop.css';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Sacred Items' },
    { id: 'murtis', name: 'Murtis & Idols' },
    { id: 'rudraksha', name: 'Rudraksha' },
    { id: 'yantras', name: 'Yantras' },
    { id: 'puja-kits', name: 'Puja Kits' },
    { id: 'gemstones', name: 'Gemstones' },
    { id: 'herbs', name: 'Herbs & Dhoop' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="page-wrapper bg-neutral">
        <div className="container">
          
          <div className="shop-header">
            <span className="shop-label">Our Catalog</span>
            <h1 className="shop-title">The Sacred Collection</h1>
            <p className="shop-subtitle">
              Authentic, energized spiritual items curated for your daily practices and divine connection.
            </p>
          </div>

          <div className="shop-layout">
            {/* Sidebar Filters */}
            <div className="shop-sidebar">
              <div className="shop-filter-card">
                <h3 className="shop-filter-title">Categories</h3>
                <ul className="shop-filter-list">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button 
                        onClick={() => setActiveCategory(cat.id)}
                        className={`shop-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Product Grid */}
            <div className="shop-main">
              <div className="shop-toolbar">
                <span className="shop-count">Showing {filteredProducts.length} items</span>
                <div className="shop-sort">
                  <span>Sort by:</span>
                  <select className="shop-sort-select">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
              
              <div className="shop-grid">
                {filteredProducts.map((product, idx) => (
                  <div key={product.id} id={idx === 0 ? 'shop-first-product' : undefined}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="shop-empty">
                  <p>No items found in this category.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default Shop;

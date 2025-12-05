import { useState } from 'react'
import { useProducts } from '../context/ProductContext'
import './Page.css'

function Category() {
  const { categories, addCategory, updateCategory, deleteCategory } = useProducts()
  const [newCategory, setNewCategory] = useState('')
  const [editingCategory, setEditingCategory] = useState<{ id: number; name: string } | null>(null)

  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      addCategory({ id: 0, name: newCategory.trim() })
      setNewCategory('')
    }
  }

  const handleUpdateCategory = () => {
    if (editingCategory && editingCategory.name.trim() !== '') {
      updateCategory(editingCategory)
      setEditingCategory(null)
    }
  }

  return (
    <div className="page">
      <div className="page-content">
        <h1>Manage Categories</h1>
        <div className="category-form">
          <input
            type="text"
            placeholder="New category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={handleAddCategory} className="submit-button">
            Add Category
          </button>
        </div>

        {editingCategory && (
          <div className="category-form">
            <input
              type="text"
              value={editingCategory.name}
              onChange={(e) =>
                setEditingCategory({ ...editingCategory, name: e.target.value })
              }
            />
            <button onClick={handleUpdateCategory} className="submit-button">
              Update Category
            </button>
            <button onClick={() => setEditingCategory(null)} className="cancel-button">
              Cancel
            </button>
          </div>
        )}

        <div className="category-list">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <span>{category.name}</span>
              <div className="category-actions">
                <button onClick={() => setEditingCategory(category)} className="product-button">
                  Edit
                </button>
                <button onClick={() => deleteCategory(category.id)} className="product-button">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category

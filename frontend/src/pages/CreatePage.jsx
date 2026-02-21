import api from '../lib/axios';
import { ArrowLeftIcon } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router'
const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/books', { title, author, publishYear: Number(publishYear) })
      toast.success('book Create successfully!')
      navigate('/')
    } catch (error) {
      console.log('Error creating book', error)
      toast.error('failed to create book.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2x1 mx-auto'>
          <Link to={'/'} className='btn btn-ghost mb-6'>
            <ArrowLeftIcon className='size-5' />Back to Books</Link>

          <div className='card bg-base-100'>
            <div className='card-boady'>
              <h2 className='card-title text-2x1 mb-4'> Create New Book</h2>
              <form onSubmit={handleSubmit}>
                <div className='from-contorl mb-4'>
                  <label className='label'>
                    <span className='label-text'> Tilte </span>
                  </label>
                  <input text="text" placeholder='Book Title' className='input input-bordrerd' value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className='from-contorl mb-4'>
                  <label className='label'>
                    <span className='label-text'> Author </span>
                  </label>
                  <input text="text" placeholder='Book Author' className='input input-bordrerd' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className='from-contorl mb-4'>
                  <label className='label'>
                    <span className='label-text'> Year of Publishing </span>
                  </label>
                  <input text="number" placeholder='e.g. 2025' className='input input-bordrerd' value={publishYear} onChange={(e) => setPublishYear(e.target.value)} required />
                </div>
                <div className='card-actions justify-end'>
                  <button type='submit' className='btn btn-primary' disabled={loading}>
                    {loading ? "Creating ..." : "Create Book"}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage

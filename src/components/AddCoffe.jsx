import React from 'react';
import Swal from 'sweetalert2'


const AddCoffe = () => {
    const formHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const orderedCoffe = {name, quantity, supplier, taste, category, details, photo}
        fetch('http://localhost:5000/coffee', {
          method : "POST",
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(orderedCoffe)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            Swal.fire({
              title: 'Success!',
              text: 'User added succesfully',
              icon: 'Success',
              confirmButtonText: 'Okey'
            })
            console.log(data)
          }
        })
      }
    
      return (
        <div className='bg-[#ededed] p-24'>
          <h1 className='text-purple-600 text-6xl'>Vite + React</h1>
         
         <form onSubmit={formHandler}>
          <div className='md:flex space-x-4'>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <label className="input-group">
        <input type="text" name='name'  className="input input-bordered w-full" />
      </label>
    </div>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Available Quantity</span>
      </label>
      <label className="input-group">
        <input type="text" name='quantity' className="input input-bordered w-full" />
      </label>
    </div>
          </div>
    
    {/* suplier row  */}
          <div className='md:flex space-x-4'>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Supplier</span>
      </label>
      <label className="input-group">
        <input type="text" name='supplier'  className="input input-bordered w-full" />
      </label>
    </div>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Taste</span>
      </label>
      <label className="input-group">
        <input type="text" name='taste' className="input input-bordered w-full" />
      </label>
    </div>
          </div>
    
    
          {/* Category row  */}
          <div className='md:flex space-x-4'>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Category</span>
      </label>
      <label className="input-group">
        <input type="text" name='category'  className="input input-bordered w-full" />
      </label>
    </div>
          <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text">Details</span>
      </label>
      <label className="input-group">
        <input type="text" name='details' className="input input-bordered w-full" />
      </label>
    </div>
          </div>
    
    
          {/* Photo row  */}
          <div className=' space-x-4'>
          <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Photo</span>
      </label>
      <label className="input-group">
        <input type="text" name='photo'  className="input input-bordered w-full" />
      </label>
    </div>
          </div>
          <input type="submit" value="Submit" className="btn btn-block mt-3"/>
         </form>
        </div>
      )
};

export default AddCoffe;
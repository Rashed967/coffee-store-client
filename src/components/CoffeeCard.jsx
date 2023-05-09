import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const {_id, name, quantity, supplier, taste, category, details, photo }
        = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/coffee/${id}`,{
                method : "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                      Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
                    console.log(data)

                }
            })
            }
          })
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-60' src={photo} alt="Movie" /></figure>
            <div className="flex w-full justify-between p-3 space-y-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>


                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">view</button>
                        <Link to={`/updateCoffe/${_id}`}><button className="btn">edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-orange-600">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
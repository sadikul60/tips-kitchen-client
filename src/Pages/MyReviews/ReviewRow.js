import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReviewRow = ({review}) => {
    const {name, photoURL, email, serviceId, serviceName, message} = review;
    return (
            <tr>
                <th>
                <label>
                    <button className='btn-ghost rounded-full p-2'><MdDeleteForever className='w-10 h-10 text-red-500'></MdDeleteForever></button>
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
                </td>
                <td>
                    <p>{serviceName}</p>
                <br/>
                <span className="badge badge-ghost badge-sm">{serviceId}</span>
                </td>
                <td>
                    <p>{message?.slice(0, 15)}</p>
                    <Link className='text-red-500 text-bold'>See More...</Link>
                </td>
                <th>
                <button className="btn btn-ghost btn-xs">Update</button>
                </th>
            </tr>
    );
};

export default ReviewRow;
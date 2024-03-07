// import React from 'react'

// function ListEmployeeComponent() {
//   return (
//     <div>ListEmployeeComponent</div>
//   )
// }

// export default ListEmployeeComponent
import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName": "Kashish",
            "lastName": "Durgiya",
            "email": "kd@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Kirti",
            "lastName": "Durgiya",
            "email": "kirtid@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Krishav",
            "lastName": "Durgiya",
            "email": "krid@gmail.com"
        },
        {
            "id": 4,
            "firstName": "Test",
            "lastName": "User",
            "email": "tu@gmail.com"
        }
    ]

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Emp Id</th>
                    <th>Emp First Name</th>
                    <th>Emp Last Name</th>
                    <th>Emp Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>)
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent
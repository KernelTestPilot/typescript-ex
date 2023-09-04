import React, { useState } from 'react'

function UserList() {
  const Schedule = [
    {
      excersise: "Kondition",
      users:[]
    },
    {
      excersise: "Yoga",
      users:[

      ]
    }
  ]

  const [tempList, setTempList] = useState(Schedule) //OBS, TEMPORÄR

  return (
    <>
    {console.log(tempList)}
    {/* {tempList.filter((type => type.excersise.includes())} */}
    {/* {tempList.map((data) => { return(<h2>{data.excersise}</h2>)})} */}
    </>
  )
}
export default UserList;


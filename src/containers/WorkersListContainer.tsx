import React, { useState, useEffect }  from 'react';
import WorkerList from 'components/WorkersList';


interface WorkersListProps {
  staffList : any
}
const WorkersListContainer: React.FC<WorkersListProps> = ({staffList}) => {

  const [staffs, setStaffs] = useState([]);
  useEffect(() => {
    setStaffs(staffList);
  },[])
  return (
    <WorkerList staffList = {staffs}/>
  )
}
export default WorkersListContainer;
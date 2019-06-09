import React, { useState, useEffect } from 'react';
import WorkerInFoDetail from 'components/WorkerInfoDetail';
import workers from 'libs/staffInfo.json';

interface DetailContainerProps {
  matchData: any;
  workers: {};
}
const WorkerInfoDetailContainer: React.FC<DetailContainerProps> = ({
  matchData,
  workers,
}) => {
  const [staffList, setStaffList] = useState();
  console.log(matchData);
  console.log(workers);
  let staffInfo
  let staffId = Number.parseInt(matchData.params.id);
  useEffect(() => {
    setStaffList(workers);
    return console.log(staffList)
  }, []);

  const mappingStaffList = () => {
    
  }
  return <div />;
};
export default WorkerInfoDetailContainer;

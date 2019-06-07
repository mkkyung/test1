import React from 'react';
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';

interface DetailInfoProps {
  staffInfo : any
}

const WorkerInfoDetail: React.FC<DetailInfoProps> = (staffInfo)=> {
  return (
    <>
      <MainContentsSubHeader/>
      <MainWorkerDetailInfo staffInfo= {staffInfo}/>
    </>
  )
}
export default WorkerInfoDetail;
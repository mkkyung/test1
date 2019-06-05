import React from 'react';
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';

const WorkerInfoDetail: React.FC = ({staffInfo})=> {
  return (
    <>
      <MainContentsSubHeader/>
      <MainWorkerDetailInfo staffInfo= {staffInfo}/>
    </>
  )
}
export default WorkerInfoDetail;
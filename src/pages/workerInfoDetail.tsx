import React from 'react';
import Layout from 'components/UI/Layout'
import WorkerInfoDetailContainer from 'components/WorkerInfoDetail';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import workers from 'libs/staffInfo.json';

const workerInfoDetail: React.FC =  () => {
  console.log(workers);
  return (
    <>
      <Layout pageType = 'Detail' >
        <MainContentsHeader/>
        <WorkerInfoDetailContainer  staffInfo = {workers}/>
      </Layout>
    </>
  )
}
export default workerInfoDetail;
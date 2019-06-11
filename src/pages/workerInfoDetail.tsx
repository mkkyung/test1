import React from 'react';
import Layout from 'components/UI/Layout';
import WorkerInfoDetailContainer from 'containers/WorkerInfoDetailContainer';
import MainContentsHeader from 'components/UI/Main/MainContentsHeader';
import WorkerInfoAttComponent from 'components/WorkerInfoAttendance';
import workers from 'libs/staffInfo.json';

const workerInfoDetail: React.FC = ({ match }: any) => {
  let infoType: string = match.url.substr(12, 10);
  return (
    <>
      <Layout pageType="Detail">
        <MainContentsHeader/>
        {infoType === 'attendance' ? (
          <WorkerInfoAttComponent matchData={match} workers={workers} />
        ) : (
          <WorkerInfoDetailContainer matchData={match} workers={workers} />
        )}
      </Layout>
    </>
  );
};
export default workerInfoDetail;

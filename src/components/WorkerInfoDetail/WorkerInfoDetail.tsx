import React from 'react';
import MainWorkerDetailInfo from 'components/UI/Main/MainWorkerDetailInfo';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';

interface DetailInfoProps {
  staffInfo: any;
  id: string;
}

const WorkerInfoDetail: React.FC<DetailInfoProps> = ({ staffInfo, id }) => {
  return (
    <>
      <MainContentsSubHeader id={id} />
      <MainWorkerDetailInfo staffInfo={staffInfo} />
    </>
  );
};
export default WorkerInfoDetail;

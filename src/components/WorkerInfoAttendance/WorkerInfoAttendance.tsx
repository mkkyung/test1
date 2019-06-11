import React from 'react';
import MainWorkerInfoAttendance from 'components/UI/Main/MainWorkerInfoAttendance';
import MainContentsSubHeader from 'components/UI/Main/MainContentsSubHeader';
interface AttendanceContainerProps {
  matchData: any;
  workers: any;
}
const WorkerInfoAttendance: React.FC<AttendanceContainerProps> = ({
  matchData,
}) => {
  return (
    <>
      <MainContentsSubHeader id={matchData.params.id} />
      <MainWorkerInfoAttendance />
    </>
  );
};
export default WorkerInfoAttendance;

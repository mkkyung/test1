import React, { ReactHTML, useState } from 'react';

interface WorkerInfoState {
  selectedInfoJsx: null | ReactHTML;
  selectedInfoType: null | string;
}
const WorkerInfoContainer: React.FC<WorkerInfoState> = () => {
  const [selectedInfoJsx, setSelectedInfoJsx] = useState(null);
  const [selectedInfoType, setSelectedInfoType] = useState('');

  const style: Object = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '550',
  };

  const makeInfoBox: any = (info: string, infoType: string) => {
    let infoBox: any = (
      <div style={style}>
        {infoType} : {info}
      </div>
    );
    if (selectedInfoType === '' || selectedInfoType !== infoType) {
        setSelectedInfoJsx(infoBox)
        setSelectedInfoType(infoType);
    }
  };
  return <div />;
};

export default WorkerInfoContainer;

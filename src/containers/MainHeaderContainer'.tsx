import React, {useState,  useCallback} from 'react';
import MainHeader from 'components/UI/Main/MainHeader';

interface MainHeaderState {
  working: boolean,
}
const MainHeaderContainer:React.FC<MainHeaderState> = () =>{

  const [working, setWorking] = useState(false);
  const onWorking =  useCallback(() =>  {
    setWorking(true)  
  } ,[])

  const onLeaving = useCallback(() =>  {
    setWorking(false)  
  } ,[])
  
    return (
      <MainHeader
        working = {onWorking}
        leaving = {onLeaving}
      />
    );
}
export default MainHeaderContainer
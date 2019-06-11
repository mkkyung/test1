import React, { useRef, useEffect, useState } from 'react';
import classes from './MainWorkerDetailInfo.module.scss';
interface DetailInfoProps {
  staffInfo: any;
}
const MainWorkerDetailInfo: React.FC<DetailInfoProps> = ({ staffInfo }) => {
  console.log(staffInfo)
  const staffId = useRef(0);
  const [staffDetail, setStaffDetail] = useState(); 
  // useEffect(() => {
  //   const { current } =staffId;
  //   staffId.current;
  //   // current.innerH("123")
  // },[staffInfo])
  // if (staffInfo !== undefined) {
    return (
      <div className={classes.InputWrapper}>
        <div className={classes.WrapperHeader}>Job description</div>
        <div className={classes.InputForm}>
          <div>사원번호</div>
          <div ></div>
          <div className={classes.ProfileImg}>프로필사진</div>
          <div className={classes.Img} />
          <div>이름</div>
          <div></div>
          <div>생년월일</div>
          <div></div>
          <div>이메일</div>
          <div></div>
          <div>직책</div>
          <div></div>
          <div>입사일</div>
          <div></div>
          <div>주소</div>
          <div></div>
          <div>퇴사일</div>
          <div></div>
          <div>연봉</div>
          <div></div>
          <div>근속년수</div>
          <div></div>
        </div>
      </div>
    );
  // }
  // return null;
};
export default MainWorkerDetailInfo;

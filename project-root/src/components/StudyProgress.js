import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { updateStudyProgress } from '../utils/api';
import { STUDY_INCREASE_THRESHOLD } from '../utils/constants';

const StudyProgress = () => {
  const [currentStudyTime, setCurrentStudyTime] = useState(0);
  const studyTarget = useSelector(state => state.studyTarget);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudyTime(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStudyTime > STUDY_INCREASE_THRESHOLD) {
      dispatch(updateStudyProgress(studyTarget));
      setCurrentStudyTime(0);
    }
  }, [currentStudyTime, dispatch, studyTarget]);

  return (
    <div>
      <h2>Study Progress for {studyTarget}</h2>
      <p>Current Study Time: {moment.utc(currentStudyTime * 1000).format('HH:mm:ss')}</p>
    </div>
  );
};

export default StudyProgress;
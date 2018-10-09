import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import {
  getLecturesLoad,
  getPracticesLoad,
  getLabsLoad,
  getExamsLoad,
  getCreditsLoad,
  getTestsLoad,
  getCourseProjectsLoad,
  getCourseWorksLoad,
  getRGRLoad,
  getDKRLoad,
  getEssaysLoad,
  getConsultationsLoad,
  getTotalLoad
} from './../../utils/calculator';

const K3TableRow = ({
  num,
  faculty,
  course,
  discipline,
  disciplineTotal,
  lectureHours,
  practiseHours,
  labHours,
  exams,
  credits,
  tests,
  courseProjects,
  courseWorks,
  RGRs,
  DKRs,
  essays,
  budgetGroups,
  practiceSubGroups,
  labSubGroups,
  contractGroups,
  flows,
  bStudents,
  kStudents,
  bkStudents,
  kkStudents
}) => {
  const lecturesLoad = getLecturesLoad({ lectureHours, flows });
  const practicesLoad = getPracticesLoad({ practiseHours, practiceSubGroups });
  const labsLoad = getLabsLoad({ labHours, labSubGroups });
  const examsLoad = getExamsLoad({ exams, bStudents, bkStudents });
  const creditsLoad = getCreditsLoad({ budgetGroups, credits });
  const testsLoad = getTestsLoad({ tests, bStudents, bkStudents });
  const courseProjectsLoad = getCourseProjectsLoad({
    courseProjects,
    bStudents,
    bkStudents
  });
  const courseWorksLoad = getCourseWorksLoad({
    courseWorks,
    bStudents,
    bkStudents
  });
  const RGRLoad = getRGRLoad({ RGRs, bStudents, bkStudents });
  const DKRLoad = getDKRLoad({ DKRs, bStudents, bkStudents });
  const essaysLoad = getEssaysLoad({ essays, bStudents, bkStudents });
  const consultationsLoad = getConsultationsLoad({
    exams,
    budgetGroups,
    disciplineTotal,
    bStudents,
    bkStudents
  });
  const totalLoad = getTotalLoad({
    lecturesLoad,
    practicesLoad,
    labsLoad,
    examsLoad,
    creditsLoad,
    testsLoad,
    courseProjectsLoad,
    courseWorksLoad,
    RGRLoad,
    DKRLoad,
    essaysLoad,
    consultationsLoad
  });

  return (
    <Table.Row>
      <Table.Cell>{num}</Table.Cell>
      <Table.Cell>
        {faculty}
        <br />
        {discipline}
        <br />
        {course} курс
      </Table.Cell>
      <Table.Cell>{disciplineTotal}</Table.Cell>
      <Table.Cell>{lectureHours}</Table.Cell>
      <Table.Cell>{practiseHours}</Table.Cell>
      <Table.Cell>{labHours}</Table.Cell>
      <Table.Cell>{exams}</Table.Cell>
      <Table.Cell>{credits}</Table.Cell>
      <Table.Cell>{tests}</Table.Cell>
      <Table.Cell>{courseProjects}</Table.Cell>
      <Table.Cell>{courseWorks}</Table.Cell>
      <Table.Cell>{RGRs}</Table.Cell>
      <Table.Cell>{DKRs}</Table.Cell>
      <Table.Cell>{essays}</Table.Cell>
      <Table.Cell>{budgetGroups}</Table.Cell>
      <Table.Cell>{practiceSubGroups}</Table.Cell>
      <Table.Cell>{labSubGroups}</Table.Cell>
      <Table.Cell>{contractGroups}</Table.Cell>
      <Table.Cell>{bStudents}</Table.Cell>
      <Table.Cell>{kStudents}</Table.Cell>
      <Table.Cell>{bkStudents}</Table.Cell>
      <Table.Cell>{kkStudents}</Table.Cell>
      <Table.Cell>{flows}</Table.Cell>

      <Table.Cell>{lecturesLoad}</Table.Cell>
      <Table.Cell>{practicesLoad}</Table.Cell>
      <Table.Cell>{labsLoad}</Table.Cell>
      <Table.Cell>{examsLoad}</Table.Cell>
      <Table.Cell>{creditsLoad}</Table.Cell>
      <Table.Cell>{testsLoad}</Table.Cell>
      <Table.Cell>{courseProjectsLoad}</Table.Cell>
      <Table.Cell>{courseWorksLoad}</Table.Cell>
      <Table.Cell>{RGRLoad}</Table.Cell>
      <Table.Cell>{DKRLoad}</Table.Cell>
      <Table.Cell>{essaysLoad}</Table.Cell>
      <Table.Cell>{consultationsLoad}</Table.Cell>
      <Table.Cell>{totalLoad}</Table.Cell>
    </Table.Row>
  );
};

K3TableRow.propTypes = {
  num: PropTypes.number.isRequired,
  faculty: PropTypes.string.isRequired,
  course: PropTypes.number.isRequired,
  discipline: PropTypes.string.isRequired,
  disciplineTotal: PropTypes.number.isRequired,
  lectureHours: PropTypes.number.isRequired,
  practiseHours: PropTypes.number.isRequired,
  labHours: PropTypes.number.isRequired,
  exams: PropTypes.number.isRequired,
  credits: PropTypes.number.isRequired,
  tests: PropTypes.number.isRequired,
  courseProjects: PropTypes.number.isRequired,
  courseWorks: PropTypes.number.isRequired,
  RGRs: PropTypes.number.isRequired,
  DKRs: PropTypes.number.isRequired,
  essays: PropTypes.number.isRequired,
  budgetGroups: PropTypes.number.isRequired,
  practiceSubGroups: PropTypes.number.isRequired,
  labSubGroups: PropTypes.number.isRequired,
  contractGroups: PropTypes.number.isRequired,
  flows: PropTypes.number.isRequired,
  bStudents: PropTypes.number.isRequired,
  kStudents: PropTypes.number.isRequired,
  bkStudents: PropTypes.number.isRequired,
  kkStudents: PropTypes.number.isRequired
};

export default K3TableRow;

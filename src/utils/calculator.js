// Л * P
export const getLecturesLoad = ({ lectureHours, flows }) =>
  +(lectureHours * flows).toFixed(2);

// П * ГП
export const getPracticesLoad = ({ practiseHours, practiceSubGroups }) =>
  +(practiseHours * practiceSubGroups).toFixed(2);

// L * ГL
export const getLabsLoad = ({ labHours, labSubGroups }) =>
  +(labHours * labSubGroups).toFixed(2);

// 0.33 * E * (Б + БК)
export const getExamsLoad = ({ exams, bStudents, bkStudents }) =>
  +(0.33 * exams * (bStudents + bkStudents)).toFixed(2);

// 2 * Г * Z
export const getCreditsLoad = ({ budgetGroups, credits }) =>
  +(2 * budgetGroups * credits).toFixed(2);

// 0.25 * M * (Б + БК)
export const getTestsLoad = ({ tests, bStudents, bkStudents }) =>
  +(0.25 * tests * (bStudents + bkStudents)).toFixed(2);

// Q * (Б + БК)
export const getCourseProjectsLoad = ({ courseProjects, bStudents, bkStudents }) =>
  +(courseProjects * (bStudents + bkStudents)).toFixed(2);

// G * (Б + БК)
export const getCourseWorksLoad = ({ courseWorks, bStudents, bkStudents }) =>
  +(courseWorks * (bStudents + bkStudents)).toFixed(2);

// 0.5 * R * (Б + БК)
export const getRGRLoad = ({ RGRs, bStudents, bkStudents }) =>
  +(0.5 * RGRs * (bStudents + bkStudents)).toFixed(2);

// 0.33 * D * (Б + БК)
export const getDKRLoad = ({ DKRs, bStudents, bkStudents }) =>
  +(0.33 * DKRs * (bStudents + bkStudents)).toFixed(2);

// 0.25 * F * (Б + БК)
export const getEssaysLoad = ({ essays, bStudents, bkStudents }) =>
  +(0.25 * essays * (bStudents + bkStudents)).toFixed(2);

// 2 * E * Г * 0.06 * N * (Б + БК) / 25
export const getConsultationsLoad = ({ exams, budgetGroups, disciplineTotal, bStudents, bkStudents }) =>
  +(2 * exams * budgetGroups * 0.06 * disciplineTotal * (bStudents + bkStudents) / 25).toFixed(2);


export const getTotalLoad =
  ({
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
   }) =>
    lecturesLoad
    + practicesLoad
    + labsLoad
    + examsLoad
    + creditsLoad
    + testsLoad
    + courseProjectsLoad
    + courseWorksLoad
    + RGRLoad
    + DKRLoad
    + essaysLoad
    + consultationsLoad;
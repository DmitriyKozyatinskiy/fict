export const convertK3Data = data =>
  data.map(row => {
    const {
      faculty,
      discipline,
      course,
      groups,
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
      bStudents,
      kStudents,
      bkStudents,
      kkStudents,
      flows
    } = row;
    const generalInfo = `${faculty} ${discipline} ${course} курс ${groups.join(
      ', '
    )}`;

    return [
      generalInfo,
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
      bStudents,
      kStudents,
      bkStudents,
      kkStudents,
      flows
    ];
  });

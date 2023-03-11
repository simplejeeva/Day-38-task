// 1.Find all the topics and tasks which are thought in the month of October

db.tasks.find({
  topic_date: { $lte: new Date("2020-10-31"), $gte: new Date("2020-10-01") },
});

db.topics.find({
  topic_created: { $lte: new Date("2020-10-31"), $gte: new Date("2020-10-01") },
});

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companydrives.find({
  drive_date: { $lte: new Date("2020-10-31"), $gte: new Date("2020-10-15") },
});

// 3.Find all the company drives and students who are appeared for the placement.

db.companydrives.aggregate({
  $lookup: {
    from: "users",
    localField: "user_id",
    foreignField: "user_id",
    as: "company_drives",
    pipeline: [{ $project: { name: 1 } }],
  },
});

// 4.Find the number of problems solved by the user in codekata

db.users.aggregate({
  $lookup: {
    from: "codekata",
    localField: "user_id",
    foreignField: "user_id",
    as: "Solved",
    pipeline: [{ $project: { codekata_problems: 1 } }],
  },
});

// 5.find all the mentors with who has the mentee's count more than 15

db.mentors.find({ class_count: { $gt: 15 } });

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.tasks.aggregate([
  {
    $lookup: {
      from: "attendance",
      localField: "topic_id",
      foreignField: "user_id",
      as: "attendance",
    },
  },
  {
    $match: { $and: [{ submitted: false }, { "attendance.present": false }] },
  },
]);

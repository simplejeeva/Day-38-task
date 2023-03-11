//1.Design database for Zen class programme
// use Zenclass

// 2.users

db.users.insertMany([
  {
    user_id: 1,
    name: "jeeva",
    email: "jeeva12@gmail.com",
  },
  {
    user_id: 2,
    name: "gokul",
    email: "gokul@gmail.com",
  },
  {
    user_id: 3,
    name: "mithun",
    email: "mithun@gmail.com",
  },
  {
    user_id: 4,
    name: "ajay",
    email: "ajay@gmail.com",
  },
]);

//codekata

db.codekata.insertMany([
  {
    user_id: 1,
    codekata_title: "Basics",
    codekata_problems: 30,
  },
  {
    user_id: 2,
    codekata_title: "Strings",
    codekata_problems: 10,
  },
  {
    user_id: 3,
    codekata_title: "Array",
    codekata_problems: 15,
  },
  {
    user_id: 4,
    codekata_title: "patterns",
    codekata_problems: 15,
  },
]);

// attendance

db.attendance.insertMany([
  {
    user_id: 1,
    topic_id: 1,
    present: true,
  },

  {
    user_id: 2,
    topic_id: 2,
    present: true,
  },
  {
    user_id: 3,
    topic_id: 3,
    present: false,
  },
  {
    user_id: 4,
    topic_id: 4,
    present: true,
  },
]);

//topics

db.topics.insertMany([
  {
    topic_id: 1,
    topic: "React",
    topic_created: new Date("2020-10-10"),
  },
  {
    topic_id: 2,
    topic: "MongoDB",
    topic_created: new Date("2020-10-25"),
  },
  {
    topic_id: 3,
    topic: "Nodejs",
    topic_created: new Date("2020-11-05"),
  },
  {
    topic_id: 4,
    topic: "API",
    topic_created: new Date("2020-11-07"),
  },
]);

// tasks

db.tasks.insertMany([
  {
    topic_id: 1,
    topic: "HTML",
    topic_date: new Date("2020-10-01"),
    submitted: true,
  },
  {
    topic_id: 2,
    topic: "CSS",
    topic_date: new Date("2020-10-10"),
    submitted: true,
  },
  {
    topic_id: 3,
    topic: "Javascript",
    topic_date: new Date("2020-10-16"),
    submitted: false,
  },
  {
    topic_id: 4,
    topic: "API",
    topic_date: new Date("2020-10-16"),
    submitted: true,
  },
]);

// task

db.tasks.insertMany([
  {
    topic_id: 1,
    topic: "HTML",
    topic_date: new Date("2020-10-01"),
    submitted: true,
  },
  {
    topic_id: 2,
    topic: "CSS",
    topic_date: new Date("2020-10-10"),
    submitted: true,
  },
  {
    topic_id: 3,
    topic: "Javascript",
    topic_date: new Date("2020-10-16"),
    submitted: false,
  },
  {
    topic_id: 4,
    topic: "API",
    topic_date: new Date("2020-10-16"),
    submitted: true,
  },
]);

// company_drives

db.companydrives.insertMany([
  {
    user_id: 1,
    drive_date: new Date("2020-10-17"),
    company_name: "Amazon",
  },
  {
    user_id: 2,
    drive_date: new Date("2020-10-25"),
    company_name: "Zoho",
  },
  {
    user_id: 3,
    drive_date: new Date("2020-10-27"),
    company_name: "Wipro",
  },
  {
    user_id: 4,
    drive_date: new Date("2020-10-30"),
    company_name: "Google",
  },
]);

// mentor

db.mentors.insertMany([
  {
    mentor_id: 1,
    mentor_name: "guru",
    mentor_email: "gurugmail.com",
    class_count: 20,
  },
  {
    mentor_id: 2,
    mentor_name: "AkbarBasha",
    mentor_email: "akbar@gmail.com",
    class_count: 10,
  },
  {
    mentor_id: 3,
    mentor_name: "Ragavkumar",
    mentor_email: "ragav@gmail.com",
    class_count: 50,
  },
  {
    mentor_id: 4,
    mentor_name: "preethi",
    mentor_email: "preethi@gmail.com",
    class_count: 50,
  },
]);

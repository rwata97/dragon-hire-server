module.exports = {
  serverData: (keywords) => {
    // Now, construct your keywords object based on the payload data
    let candidates = [
      {
        id: 1,
        name: 'Leanne Graham',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 2,
        name: 'Ervin Howell',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        skills: [],
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        skills: ['nodejs', 'express', 'java', 'sql'],
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        skills: [],
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        skills: ['nodejs', 'express', 'java', 'mongodb'],
      },
    ];

    const radarData = [
      [
        { axis: 'Sales', value: 75 },
        { axis: 'Marketing', value: 85 },
        { axis: 'Product', value: 95 },
        { axis: 'Customer Support', value: 70 },
        { axis: 'Operations', value: 90 },
      ],
      [
        { axis: 'Sales', value: 20 },
        { axis: 'Marketing', value: 45 },
        { axis: 'Product', value: 25 },
        { axis: 'Customer Support', value: 10 },
        { axis: 'Operations', value: 30 },
      ],
      [
        { axis: 'Sales', value: 10 },
        { axis: 'Marketing', value: 35 },
        { axis: 'Product', value: 95 },
        { axis: 'Customer Support', value: 80 },
        { axis: 'Operations', value: 30 },
      ],
      [
        { axis: 'Sales', value: 20 },
        { axis: 'Marketing', value: 29 },
        { axis: 'Product', value: 95 },
        { axis: 'Customer Support', value: 88 },
        { axis: 'Operations', value: 46 },
      ],
      [
        { axis: 'Sales', value: 80 },
        { axis: 'Marketing', value: 12 },
        { axis: 'Product', value: 18 },
        { axis: 'Customer Support', value: 29 },
        { axis: 'Operations', value: 38 },
      ],
      [
        { axis: 'Sales', value: 20 },
        { axis: 'Marketing', value: 45 },
        { axis: 'Product', value: 25 },
        { axis: 'Customer Support', value: 10 },
        { axis: 'Operations', value: 30 },
      ],
      [
        { axis: 'Sales', value: 23 },
        { axis: 'Marketing', value: 65 },
        { axis: 'Product', value: 43 },
        { axis: 'Customer Support', value: 15 },
        { axis: 'Operations', value: 55 },
      ],
      [
        { axis: 'Sales', value: 99 },
        { axis: 'Marketing', value: 10 },
        { axis: 'Product', value: 20 },
        { axis: 'Customer Support', value: 18 },
        { axis: 'Operations', value: 60 },
      ],
    ];
    candidates = candidates.map((candidate, index) => {
      const random = Math.floor(Math.random() * radarData.length);
      return {
        ...candidate,
        data: radarData[random],
      };
    });

    candidates = [...candidates, ...candidates, ...candidates];
    // Send back the keywords in the response

    const filteredCandidates = candidates.filter((candidate) =>
      keywords.filter((keyword) => candidate.skills.includes(keyword))
    );

    return filteredCandidates;
  },
};

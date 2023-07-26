module.exports = {
  serverData: (candidates) => {
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
    const years = [1, 2, 3, 4, 5, 6, 7, 8];
    candidates = candidates.map((candidate, index) => {
      const random = Math.floor(Math.random() * radarData.length);
      return {
        ...candidate,
        data: radarData[random],
        years: years[Math.floor(Math.random() * years.length)],
      };
    });

    console.log(candidates);

    return candidates;
  },
};

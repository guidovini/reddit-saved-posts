const filterMultis = (multis = []) => {
  const filteredMultis = [];
  multis.map((multi) => {
    filteredMultis.push({
      name: multi.data.name,
      subreddits: multi.data.subreddits.map((s) => s.name),
    });
  });
  // console.log(filteredMultis);
  return filteredMultis;
};

module.exports = filterMultis;

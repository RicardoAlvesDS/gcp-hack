const getData = (items) =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(items);
  }, 3000);
});

export default getData;
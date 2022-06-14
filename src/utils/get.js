const getData = (items) =>
new Promise((resolve) => {
  setTimeout(() => {
    resolve(items);
  }, 2000);   
});

export default getData;
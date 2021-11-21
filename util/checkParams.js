function checkParams(val) {
  //check if function param is empty
  if (!val) {
    console.log('no null values allowed, exiting');
    process.exit();
  }
  return;
}

module.exports = { checkParams };

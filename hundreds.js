function howManyHundreds(bottles) {
  return (bottles - (bottles % 100)) / 100;
  // return Math.floor(bottles / 100);
}
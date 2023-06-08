const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for(const char of sentence) {
  process.stdout.write(char);
}
}, 1000
);


const time = process.argv.slice(2);

for (const item in time) {
  if (time[item] > 0) {
    setTimeout(() => {
      process.stdout.write('beep\n')
    }, time[item] * 1000);
  };
};


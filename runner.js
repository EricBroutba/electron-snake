const fs = require('fs');
function write_file(file, txt){
  console.log(fs.writeFile(file, txt, function(err){
    if(err){
      console.log("error");
    }
  }));
  return file
}

function run_python(){
  let txt_to_write = "#!/usr/bin/env python"
  txt_to_write += 'import sys \n'
  txt_to_write += 'print("hello") \nreturn("okkk") \n'
  txt_to_write += 'sys.stdout.flush()'

  let filepath = write_file('test_python', txt_to_write);

  const spawn = require("child_process").spawn;
  const process = spawn('python', [filepath]);

  process.stdout.on('data', (data) => {
    console.log("data");
    console.log(data);
  })

}

run_python();

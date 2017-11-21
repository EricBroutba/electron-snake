const fs = require('fs');
function _write_file(file, txt){
  console.log(fs.writeFile(file, txt, function(err){
    if(err){
      console.log("error");
    }
  }));
  return file
}

function run_python(){
  let txt_to_write = 'import sys /n print("hello") /n return("okkk") /n sys.stdout.flush()'
  let filepath = _write_file('test_python', '');


  const spawn = require("child_process").spawn;
  const process = spawn('python', [filepath]);

  process.stdout.on('data', function(data){
    console.log("data");
    console.log(data);
  })

}
console.log("loaded");
run_python();

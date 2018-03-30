const minimist=require('minimist');

const help=require('./cli/help')
const CONFIG =require('./config')

let cfg={};
let cli={};

function initCli(){
	const version=require('./cli/version')
	const COMMANDS=CONFIG.COMMANDS;
	COMMANDS.forEach((cmd)=>{
		cli[cmd]=require(`./cli/${cmd}`)
	})
}

function execCli(){
	const args =cfg.args._[2];
	Object.keys(cfg.args).some((cmd)=>{
		// console.log(cmd);
			if(cmd==='v'||cmd==='version'){
				cli['version'].init();	
			}
			if(cmd==='h'||cmd==='help'){
				cli['help'].init();	
			}
				
		
	})
}
module.exports ={
	init:()=>{
	 	cfg.args=minimist(process.argv)
		initCli();
		execCli();
	}
};

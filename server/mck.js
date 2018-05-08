const Mock = require('mockjs')
const fs = require('fs')

let res = Mock.mock({
	"success":1,
	"info":"请求成功",
	"code":1001,
	"list|12":[
		{
			id:()=>Mock.mock('@increment()'),
			txt:()=>Mock.mock('@cparagraph(1,2)'),
			images:()=>Mock.mock('@image("800x800","skyblue","","png","!")'),
			price:()=>Mock.mock('@natural(20,100)')
		}
	]
})
fs.writeFileSync('mocks.json',JSON.stringify(res))

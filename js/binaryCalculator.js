var res = document.getElementById('res')
var btn0 = document.getElementById('btn0')
var btn1 = document.getElementById('btn1')
var btnClr = document.getElementById('btnClr')
var btnEql = document.getElementById('btnEql')
var btnSum = document.getElementById('btnSum')
var btnSub = document.getElementById('btnSub')
var btnMul = document.getElementById('btnMul')
var btnDiv = document.getElementById('btnDiv')

var aux = '', str = [], display = '', prev = '', curr = '', flag = true
res.innerHTML = ''
function action(e){
	var btn = e.target || e.srcElement
	curr = document.getElementById(btn.id).innerHTML.toString()
	flag = curr == 'C' ? true : flag
	if (flag){
		if ((curr == prev || prev == '') && curr == '=')
			res.innerHTML = res.innerHTML
		else if ((prev == '' || prev == '+' || prev == '-' || prev == '*' || prev == '/') && (curr == '+' || curr == '-' || curr == '*' || curr == '/')){
			res.innerHTML = "Syntax Erro \n [C] : Cancel"
			flag = false
		}
		else{
			if (document.getElementById(btn.id).innerHTML == '='){
				str.push(aux)
				let cc = ''
				for (let elt of str){
					if (elt != '+' && elt != '-' && elt != '*' && elt != '/')
						cc = cc + parseInt(elt,2).toString(10)
					else
						cc = cc + elt
				}
				res.innerHTML = eval(cc).toString(2)
				aux = res.innerHTML
				display = aux
				str = []
				prev = curr
			}
			else if (document.getElementById(btn.id).innerHTML == 'C'){
				res.innerHTML = ''
				aux = ''
				str = []
				display = ''
				prev = ''
			}
			else{
				display = display + document.getElementById(btn.id).innerHTML.toString()
				if (document.getElementById(btn.id).innerHTML == '1' || document.getElementById(btn.id).innerHTML == '0')
					aux = aux + document.getElementById(btn.id).innerHTML.toString()
				else{
					str.push(aux)
					str.push(document.getElementById(btn.id).innerHTML.toString())
					aux = ''
				}
				res.innerHTML = display
				prev = curr
			}
		}
	}
}

btn0.onclick = action
btn1.onclick = action
btnClr.onclick = action
btnEql.onclick = action
btnSum.onclick = action
btnSub.onclick = action
btnMul.onclick = action
btnDiv.onclick = action
res.onclick = action
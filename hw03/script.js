function createTable(){
	document.write('<div id="data" align="center"><span>Количество строк   </span><input type="text" style="width: 20;" id="str"/><br><span>Количество столбцов   </span><input type="text" style="width: 20;" id="stl"/><br><input type="button" id="button2" onclick="create();" value="Создать"/></div>');	
}

function create(){
	var str = document.getElementById('str').value;
	var stl = document.getElementById('stl').value;
	var x = document.getElementById('data');
	var b = document.getElementsByTagName('body')[0];
	b.removeChild(x);
	
	//	Вывод в csv формат
	var save = document.createElement('input');
	save.type = 'button';
	save.value = 'Вывести таблицу в csv формате';
	save.onclick = function(){
		var tdValues = document.getElementsByTagName('td');
		var k = 0;
		var n = tdValues.length;
		while(k < n){
			var line = []
			for(var i = 0;i < stl;i++){
				var value = tdValues[k].innerHTML;
				if(value.length > 0){
					line.push(value);
				}else{
					line.push('\"\"');
				}
				k++;
			}
			console.log(line.join(';'));
			
		}
	}
	b.appendChild(save);
	
	//	Добавить строчку
	var newStr = document.createElement('input');
	newStr.type = 'button';
	newStr.value = 'Добавить строку';
	newStr.onclick = function(){
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for(var k = 0;k < stl;k++){
			var td = document.createElement('td');
			td.style.width = '50px';
			td.style.height = '30px';
			td.ondblclick = function(){
				addText(this);
			}
			tr.appendChild(td);
		}
		str++;
	}
	b.appendChild(newStr);
	//	Добавить столбец
	var newStl = document.createElement('input');
	newStl.type = 'button';
	newStl.value = 'Добавить столбец';
	newStl.onclick = function(){
		var trs = document.getElementsByTagName('tr');
		for(var i = 0;i < str;i++){
			var newTd = document.createElement('td');
			newTd.style.width = '50px';
			newTd.style.height = '30px';
			newTd.ondblclick = function(){
				addText(this);
			}
			trs[i].appendChild(newTd);
		}
		stl++;
	}
	b.appendChild(newStl);
	
	var table = document.createElement('table');
	table.border = 1;
	table.align = 'center'; 
	b.appendChild(table);
	for(var i = 0;i < str;i++){
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for(var j = 0;j < stl;j++){
			var td = document.createElement('td');
			td.style.width = '50px';
			td.style.height = '30px';
			td.ondblclick = function(){
				addText(this);
			}
			tr.appendChild(td);
		}
	}
	
	//	Добавить <input type="text"/>
	function addText(td){
		var input = document.createElement('input');
		input.value = td.innerHTML;
		td.innerHTML = '';
		input.type = 'text';
		input.style.width = '50px';
		input.style.height = '30px';
		document.onkeyup = function (e) {
			e = e || window.event;
			if (e.keyCode === 13) {
				var line = input.value;
				td.removeChild(input);
				td.innerHTML = line;
			}
		}
		
		td.appendChild(input);
	}
}

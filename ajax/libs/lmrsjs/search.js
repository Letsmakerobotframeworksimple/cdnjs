	var source_code = '';
	var sourcecodelist = [];
	var clipboardlist = [];
	var texteditorlist = [];
		function search(keyword, keyworddoc, example) {
			
			var list = [];
			var keyword = keyword;
			var keyworddocument = keyworddoc;
			var example = example;
		  for (var key in keyword) { 
			list.push(key)
				}
		  var myobj = document.getElementById('myUL').getElementsByTagName("li");
		  var input, filter, ul, li, a, i, txtValue;
		  //var list = ['Click Element', 'Wait Until Page Contains element', 'Sleep', 'Input Text']
			input = document.getElementById("myInput");
				if(myobj.length !== 0){
				var len = myobj.length;
				for (i = 0; i < len; i++) {
				myobj[0].remove();
				}
				}
			
			filter = input.value.toUpperCase();
			if(filter == ""){
				var list = []
				}
		  for(i=0; i<list.length; i++){
		  txtValue = list[i]
		  if (txtValue.toUpperCase().indexOf(filter) > -1) {  
			const newli = document.createElement("li");
			const newanchor = document.createElement("a");
			const newa = newli.appendChild(newanchor);
          const newContent = document.createTextNode(list[i]);
          newa.appendChild(newContent);
		  const child = document.getElementById('myUL').appendChild(newli); 
		  child.setAttribute('onclick', 'createKeyword('+ '"' + list[i] + '"' + ')');
          }
		  }
		  if(filter == ""){
		  if(myobj.length !== 0){
				for (i = 0; i < myobj.length; i++) {
				myobj[i].remove();				
				}
				}
        }
		}
		
		function createKeyword(select_keyword){
			removeexample();
			removedocument();
			removealert();
			document.getElementById('alert').style.display = 'none';
			var myobj = document.getElementById('myUL').getElementsByTagName("li");
			var keylabel = document.getElementById('keyword').getElementsByTagName("label");
			var keyinput = document.getElementById('keyword').getElementsByTagName("input");
			var btn_div = document.getElementById('btn-div');
			var keyselect = document.getElementById('keyword').getElementsByTagName("select");
			var leninput = keyinput.length;
			var lenselect = keyselect.length;
			if(lenselect != 0){
				for(i = 0; i < lenselect; i++){
					keyselect[0].remove();
				}
			}
			if(btn_div != null){
			btn_div.remove();
			}
			var labellen = keylabel.length;
			if(labellen != 0){
			for(i = 0; i < labellen; i++){
				keylabel[0].remove();
			}
			}
			if(leninput != 0){
			for(i = 0; i < leninput; i++){
				keyinput[0].remove();
			}
			}
			//console.log(keylabel)
			//keyobj.remove();
			input = document.getElementById("myInput");
			input.value = input.defaultValue;
			if(myobj.length !== 0){
				var len = myobj.length;
				for (i = 0; i < len; i++) {
				myobj[0].remove();
				}
				}
			idnum = 0;
			for (var keylist in keyword[select_keyword]['keywordlist']) { 
			if(keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == 'text' || keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == 'number' || keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == 'select'){
				//console.log('inside')
				if(select_keyword == keyword[select_keyword]['keywordlist'][keylist]['element'])
				{
					const label = document.createElement("label");
					const labelcontent = document.createTextNode(keyword[select_keyword]['keywordlist'][keylist]['element']);
					// add the text node to the newly created div
					label.appendChild(labelcontent);
					document.getElementById('keyword').appendChild(label);
					const newtext = document.createElement("input");
					newtext.setAttribute('type',keyword[select_keyword]['keywordlist'][keylist]['htmltag'])
					newtext.setAttribute('class', "form-control form-control-lg")
					newtext.setAttribute('readonly', "true")
					newtext.setAttribute('value', keyword[select_keyword]['key'])
					newtext.setAttribute('id', keyword[select_keyword]['keywordlist'][keylist]['htmltag'] + keylist.toString());
					//newtext.setAttribute('id', select_keyword + idnum)
					document.getElementById('keyword').appendChild(newtext);
				}
				else{
					const label = document.createElement("label");
					const labelcontent = document.createTextNode(keyword[select_keyword]['keywordlist'][keylist]['element']);
					// add the text node to the newly created div
					label.appendChild(labelcontent);
					if(keyword[select_keyword]['keywordlist'][keylist]['Mandatory'] == "Yes"){
						label.setAttribute('class', 'control-label')
					}
					document.getElementById('keyword').appendChild(label);
					console.log(keyword[select_keyword]['keywordlist'][keylist]['htmltag']);
					if(keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == "text" || keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == "number"){
					const newtext = document.createElement("input");
					newtext.setAttribute('type',keyword[select_keyword]['keywordlist'][keylist]['htmltag']);
					newtext.setAttribute('class', "form-control form-control-lg");
					newtext.setAttribute('placeholder', keyword[select_keyword]['keywordlist'][keylist]['placeholder']);
					newtext.setAttribute('id', keyword[select_keyword]['keywordlist'][keylist]['htmltag'] + keylist.toString());
					if(keyword[select_keyword]['keywordlist'][keylist]['Mandatory'] == "Yes"){
						newtext.setAttribute('required', 'true')
					}
					document.getElementById('keyword').appendChild(newtext);
					}
					
					else if(keyword[select_keyword]['keywordlist'][keylist]['htmltag'] == "select"){
						console.log('indide select');
						const newtext = document.createElement("Select");
						newtext.setAttribute('class', 'form-control');
						const newoption = document.createElement("Option");
						newoption.appendChild(document.createTextNode('Select ' + keyword[select_keyword]['keywordlist'][keylist]['element']));
						newoption.setAttribute('Value', '');
						newtext.setAttribute('id', keyword[select_keyword]['keywordlist'][keylist]['htmltag'] + keylist.toString());
						newtext.appendChild(newoption);
						document.getElementById('keyword').appendChild(newtext);
						const selectoption = keyword[select_keyword]['keywordlist'][keylist]['placeholder'].split('=')[1].split(',');
						console.log(selectoption);
						for(var j = 0; j < selectoption.length; j++){
							const newoption = document.createElement("Option");
							newoption.appendChild(document.createTextNode(selectoption[j]));
							newoption.setAttribute('Value', selectoption[j]);
							newtext.appendChild(newoption);
						}
						document.getElementById('keyword').appendChild(newtext);
					}
					//newtext.setAttribute('readonly', "true")
					//newtext.setAttribute('value', keyword[select_keyword]['key'])
					//newtext.setAttribute('id', select_keyword + idnum)
					
				}
				
			}
			idnum++;
				}
			const divbtn = document.createElement("div");
			divbtn.setAttribute('class', 'btn-toolbar');
			divbtn.setAttribute('id', 'btn-div');
			classdict = {'Save': "btn btn-success", 'Cancel': 'btn btn-danger', 'Copy to Clipboard' : 'btn btn-info', 'View Document' : 'btn btn-primary', 'View Example' : 'btn btn-warning'};
			for(var cls in classdict){
			const btn = document.createElement("button");
			btn.setAttribute('type', 'button');
			if(cls == 'Cancel'){
				btn.setAttribute('onclick', 'cancelkeyword()');
				btn.setAttribute('id', 'btn-cancel');
			}
			else if(cls == 'Copy to Clipboard'){
				btn.setAttribute('onclick', 'copyclipboard('+ '"' + select_keyword + '"' + ')');
				btn.setAttribute('id', 'btn-copy');
			}
			else if(cls == 'View Document'){
				btn.setAttribute('onclick', 'viewdocument('+ '"' + select_keyword + '"' + ')');
				btn.setAttribute('id', 'btn-view');
			}
			else if(cls == 'View Example'){
				btn.setAttribute('onclick', 'viewexample('+ '"' + select_keyword + '"' + ')');
				btn.setAttribute('id', 'btn-example');
			}
			else{
				btn.setAttribute('onclick', 'addkeyword('+ '"' + select_keyword + '"' + ')');
				btn.setAttribute('id', 'btn-save');
			}
			
			btn.setAttribute('class', classdict[cls]);
			const btncontent = document.createTextNode(cls);
			btn.appendChild(btncontent)
			divbtn.appendChild(btn)
			}
			document.getElementById('btn-save-cancel').appendChild(divbtn);
			
			
		}
		
		function addkeyword(rfjsonkey){
			document.getElementById('alert').style.display = 'none';
			removealert();
			var flag = "";
			var robotkey = "";
			const code = document.getElementById('sourcecode');
			var rfKeywords = document.getElementById('keyword').getElementsByTagName("input");
			for(var rfkey in rfKeywords){
				////console.log(rfKeywords[rfkey]['value']);
				var rfkeyword = rfKeywords[rfkey]['value'];
				if(rfkeyword != undefined){
					if(rfkeyword == '*** Variables ***' || rfkeyword == '*** Settings ***' || rfkeyword == '*** Test Cases ***'){
						if(code.value.indexOf(rfkeyword) <= -1){
						robotkey = robotkey + rfkeyword + '\n'
						}
						else{
							flag = rfkeyword;
						}
					}
					else{
					if(keyword[rfjsonkey]['keywordlist'][rfkey]['Mandatory'] == "Yes" && rfkeyword == ''){
						var alertkey = document.getElementById('alert');
						alertkey.setAttribute('class', "alert alert-warning");
						var textalert = document.createTextNode(keyword[rfjsonkey]['keywordlist'][rfkey]['element'] + ' is Required');
						var ptag = document.createElement('p');
						ptag.appendChild(textalert);
						alertkey.appendChild(ptag);
						document.getElementById('alert').style.display = "";
						return
					}
					else{
						if(rfkeyword != ""){
							robotkey = robotkey + '    ' + rfkeyword
						}
					}
					}
				}
			}
			clearfields(keyword, rfKeywords, rfjsonkey);
			sourcecode(robotkey,flag);
			//console.log(robotkey)
			return robotkey;
		}
		
		function cancelkeyword(){
			removeexample();
			removedocument();
			document.getElementById('alert').style.display = 'none';
			removealert();
			var myobj = document.getElementById('myUL').getElementsByTagName("li");
			var keylabel = document.getElementById('keyword').getElementsByTagName("label");
			var keyinput = document.getElementById('keyword').getElementsByTagName("input");
			var keyselect = document.getElementById('keyword').getElementsByTagName("select");
			var btn_div = document.getElementById('btn-div');
			//console.log(btn_div)
			lenselect = keyselect.length;
			if(lenselect != 0){
				for(i = 0; i < lenselect; i++){
					keyselect[0].remove();
				}
			}
			if(btn_div != null){
			btn_div.remove();
			}
			var labellen = keylabel.length;
			if(labellen != 0){
			for(i = 0; i < labellen; i++){
				keylabel[0].remove();
				keyinput[0].remove();
			}
			}
			//console.log(keylabel)
			//keyobj.remove();
			input = document.getElementById("myInput");
			input.value = input.defaultValue;
			if(myobj.length !== 0){
				var len = myobj.length;
				for (i = 0; i < len; i++) {
				myobj[0].remove();
				}
				}
		}
		
		function removealert(){
			var paratag = document.getElementById('alert');
			//console.log('len' + paratag.length)
			//if(paratag.length != 0){
				//paralen = paratag.length;
			//for(i=0; i< paralen; i++){
				//paratag[0].remove();
			//}
			//}
		}
		
		function clearfields(keyword, rfKeywords, rfjsonkey){
			for(var rfkey in rfKeywords){
				var rfkeyword = rfKeywords[rfkey]['value'];
				if(rfkeyword != undefined){
					if(keyword[rfjsonkey]['key'] != rfkeyword){
						rfKeywords[rfkey].value = "";
					}
					
				}
			}
		}
		
		function sourcecode(sourcecode, flag){
			var tempcode = '';
			sourcecodelist = texteditorlist;
			if(flag == '*** Variables ***' || flag == '*** Settings ***'){
				for(var i = 0; i<sourcecodelist.length; i++){
					if(sourcecodelist[i].indexOf(flag)>= 0){
						sourcecodelist[sourcecodelist[i].indexOf(flag)] = sourcecodelist[sourcecodelist[i].indexOf(flag)] + '\n' + sourcecode;
					}
			}
			}
		
			else{
				//console.log("new list " + flag)
			sourcecodelist.push(sourcecode);
			}
			const code = document.getElementById('sourcecode');
			codelen = sourcecodelist.length;
			for(var i = 0; i<codelen; i++){
				////console.log('inide i' + i)
				tempcode = tempcode + sourcecodelist[i] + '\n';
			}
			code.value = tempcode;
		}
		
		function copyclipboard(rfjsondata){
			//document.getElementById('alert').style.display = 'none';
			removealert();
			var flag = "";
			var robotkey = "";
			const code = document.getElementById('sourcecode');
			//var rfKeywords = document.getElementById('keyword').getElementsByTagName("input");
			lenkey = keyword[rfjsondata]['keywordlist'].length;
			//for(var rfkey in rfKeywords){
			for(var rfkey = 0; rfkey < lenkey; rfkey++){
				//var rfkeyword = rfKeywords[rfkey]['value'];
				var rfkeyid = keyword[rfjsondata]['keywordlist'][rfkey]['htmltag'] + rfkey.toString();
				rfkeyword = document.getElementById(rfkeyid).value;
				if(rfkeyword != undefined){
					if(rfkeyword == '*** Variables ***' || rfkeyword == '*** Settings ***' || rfkeyword == '*** Test Cases ***'){
						if(code.value.indexOf(rfkeyword) <= -1){
						robotkey = robotkey + rfkeyword + '\n'
						}
						else{
							flag = rfkeyword;
						}
					}
					else{
					if(keyword[rfjsondata]['keywordlist'][rfkey]['Mandatory'] == "Yes" && rfkeyword == ''){
						var alertkey = document.getElementById('alert');
						alertkey.setAttribute('class', "alert alert-warning");
						alertkey.setAttribute("id", "alert");
						//var textalert = document.createTextNode(keyword[rfjsondata]['keywordlist'][rfkey]['element'] + ' is Required');
						//var ptag = document.createElement('p');
						//ptag.appendChild(textalert);
						//alertkey.appendChild(ptag);
						alertkey.innerHTML = keyword[rfjsondata]['keywordlist'][rfkey]['element'] + ' is Required';
						document.getElementById('alert').style.display = "";
						return
					}
					else{
						if(rfkeyword != ""){
							robotkey = robotkey + '    ' + rfkeyword
						}
					}
					}
				}
			}
			clipboardlist.push({'keyword' : rfjsondata, 'clipboardData' : robotkey});
			copyToClipboard(robotkey);
			snackbar('Clipboard Copied Successfully!! &#128578;');
		}
		
		function copyToClipboard(str){
			  const el = document.createElement('textarea');
			  el.value = str;
			  el.setAttribute('readonly', '');
			  el.style.position = 'absolute';
			  el.style.left = '-9999px';
			  document.body.appendChild(el);
			  el.select();
			  document.execCommand('copy');
			  document.body.removeChild(el);
			  var alertkey = document.getElementById('alert');
			  alertkey.setAttribute('class', "alert alert-success");
			  alertkey.setAttribute("id", "alert");
			alertkey.innerHTML = 'Clipboard Copied Successfully';
			document.getElementById('alert').style.display = "";
			  
};

		function darkmode() {
		   var element = document.body;
		   var theme = document.getElementById('theme');
		   var nav = document.getElementById('nav-dark');
		   if(theme.innerHTML == 'Light Mode'){
			   theme.setAttribute('class', 'btn btn-dark float-right');
			   theme.innerHTML = 'Dark Mode';
			   nav.setAttribute('class', 'navbar');
		   }
		   else{
		   theme.setAttribute('class', 'btn btn-light float-right');
		   theme.innerHTML = 'Light Mode';
		   nav.setAttribute('class', 'navbar navbar-dark bg-dark');
		   
		   }
		   element.classList.toggle("dark-mode");
		}

function viewdocument(viewkeyword){
	removeexample();
	removedocument();
	var underlinelist = ['Arguments:'];
	var examplebtn = document.getElementById('btn-example');
	examplebtn.innerText = "View Example";
	var docbtn = document.getElementById('btn-view');
	if(docbtn.innerText == "View Document"){
	for (var key in keyworddoc) { 
			var docdisplay = "";
			if(key == viewkeyword){
				var view = document.getElementById('viewdocument');
				var createdoc = document.createElement('h3');
				createdoc.appendChild(document.createTextNode('Documentation'));
				createdoc.setAttribute('style', 'text-decoration:underline');
				view.appendChild(createdoc);
				//console.log(keyworddoc[key]);
				for(var doclist in keyworddoc[key]){
					var createdoc = document.createElement('h6');
					var createdoctext = document.createTextNode(keyworddoc[key][doclist]);
					var d = createdoc.appendChild(createdoctext);
					for(var underline in underlinelist){
						console.log(underline);
					if(keyworddoc[key][doclist].indexOf(underlinelist[underline]) >= 0){
						createdoc.setAttribute('style', 'text-decoration:underline');
					}
					}
					var e = view.appendChild(createdoc);
				}
			}
				}
				docbtn.innerText = "Close Document";
	}
	else{
		docbtn.innerText = "View Document";
	}
}

function removedocument(){
	var removedoch6 = document.getElementById('viewdocument').getElementsByTagName('h6');;
	var removedoch3 = document.getElementById('viewdocument').getElementsByTagName('h3');
	if(removedoch3.length !== 0){
				var viewlenh3 = removedoch3.length;
				for (i = 0; i < viewlenh3; i++) {
				removedoch3[0].remove();
				}
				}
	if(removedoch6.length !== 0){
	var viewlenh6 = removedoch6.length;
	for (i = 0; i < viewlenh6; i++) {
	removedoch6[0].remove();
	}
	}
}

function viewexample(viewexample){
	removeexample();
	removedocument();
	var viewbtn = document.getElementById('btn-view');
	viewbtn.innerText = "View Document";
	var examplebtn = document.getElementById('btn-example');
	if(examplebtn.innerText == 'View Example'){
	for (var key in example) { 
			//console.log(key)
			var examdisplay = "";
			if(key == viewexample){
				//console.log('inside if');
				lenindex = example[key][0].length;
				var view = document.getElementById('viewexample');
				var createdoc = document.createElement('h3');
				createdoc.appendChild(document.createTextNode('Example'));
				createdoc.setAttribute('style', 'text-decoration:underline');
				view.appendChild(createdoc);
				var table = document.createElement('table');
				table.setAttribute('class', 'table table-bordered');
				for(var keylist in example[key]){
					var tr = document.createElement('tr');
					for(var index = 0; index < lenindex; index++){
					if(keylist == 0){
						var thd = document.createElement('th');
						tr.setAttribute('class', "table-primary");
					}
					else{
						var thd = document.createElement('td');
					}
					var thdtext = document.createTextNode(example[key][keylist][index]);
					if(example[key][keylist][index] != undefined){
					thd.appendChild(thdtext);
					}
					tr.appendChild(thd);
					}
					table.appendChild(tr);
				}
			view.appendChild(table);
			
			}
				}
				examplebtn.innerText = "Close Example";
	}
	else{
		examplebtn.innerText = "View Example";
	}
}

function removeexample(){
	var removetable = document.getElementById('viewexample').getElementsByTagName('table');
	var removedoch3 = document.getElementById('viewexample').getElementsByTagName('h3');
	if(removedoch3.length !== 0){
				var viewlenh3 = removedoch3.length;
				for (i = 0; i < viewlenh3; i++) {
				removedoch3[0].remove();
				//console.log('inside remove')
				}
				}
	if(removetable.length != 0){
	removetable[0].remove();
	}
	//view.removeChild();
}


function openeditor(){
	closeclipboard();
	var editorbtn = document.getElementById('editor-btn');
	if(editorbtn.innerHTML == "Open Editor"){
		document.getElementById('sourcecode').style.display = '';
		editorbtn.innerHTML = "Close Editor";
		document.getElementById('view-clip-btn').innerHTML = "View Clipboard";
		document.getElementById('source-clip').innerHTML = 'Editor';
		document.getElementById('editor-download-btn').style.display = '';
		document.getElementById('updateeditor-btn').style.display = '';
	}
	else{
		document.getElementById('editor-download-btn').style.display = 'none';
		document.getElementById('updateeditor-btn').style.display = 'none';
		document.getElementById('sourcecode').style.display = 'none';
		editorbtn.innerHTML = "Open Editor";
		document.getElementById('view-clip-btn').innerHTML = "View Clipboard";
		document.getElementById('source-clip').innerHTML = 'Robot Data';
	}
}

function viewclipboard(){
	var btnclip = document.getElementById('view-clip-btn');
	document.getElementById('editor-btn').innerHTML = "Open Editor";
	if(btnclip.innerHTML == "View Clipboard"){
		document.getElementById('source-clip').innerHTML = 'Clipboard';
		document.getElementById('sourcecode').style.display = 'none';
		document.getElementById('editor-download-btn').style.display = 'none';
		document.getElementById('updateeditor-btn').style.display = 'none';
		closeclipboard();
		clipboardview();
		btnclip.innerHTML = "Close Clipboard";
	}
	else{
		closeclipboard();
		btnclip.innerHTML = "View Clipboard";
		document.getElementById('source-clip').innerHTML = 'Robot Data';
	}
}

function clipboardview(){
	//document.getElementById('alert-clip').style.display = "none";
	var cardclass = ["card text-white bg-primary mb-3", "card text-white bg-secondary mb-3", "card text-white bg-success mb-3", "card text-white bg-danger mb-3", "card text-white bg-warning mb-3", "card text-white bg-info mb-3", "card bg-light mb-3", "card text-white bg-dark mb-3"];
		cliplen = clipboardlist.length;
		if(cliplen != 0){
			var downloadbtn = document.createElement('Button');
			downloadbtn.setAttribute('class', 'fa fa-download');
			downloadbtn.setAttribute('id', 'download-btn');
			//downloadbtn.appendChild(document.createTextNode("Download"));
			downloadbtn.setAttribute('onclick', 'downloadcliplist()');
			document.getElementById('div-download-btn').appendChild(downloadbtn);
			var div1 = document.createElement('div');
			div1.setAttribute('class', 'row');
			var div2 = document.createElement('div');
			div2.setAttribute('class', 'col-6');
			var div3 = document.createElement('div');
			div3.setAttribute('class', 'col-6');
			div1.appendChild(div2);
			div1.appendChild(div3);
			for(var k = 0; k < cliplen; k++){
				console.log(clipboardlist[k]['keyword']);
				const createcard = document.createElement('div');
				createcard.setAttribute('class', cardclass[Math.floor(Math.random() * cardclass.length)]);
				createcard.setAttribute('style', 'max-width: 18rem;');
				var createcarddiv = document.createElement('div');
				createcarddiv.setAttribute('class', 'card-header');
				var textheader = document.createTextNode('ClipboardData ' + k);
				createcarddiv.appendChild(textheader);
				createcard.appendChild(createcarddiv);
				var createbodydiv = document.createElement('div');
				createbodydiv.setAttribute('class', 'card-body');
				createcard.appendChild(createbodydiv);
				var createh = document.createElement('h5');
				createh.setAttribute('class', 'card-title');
				var texth = document.createTextNode(clipboardlist[k]['keyword']);
				createh.appendChild(texth);
				createbodydiv.appendChild(createh);
				var createp = document.createElement('p');
				createp.setAttribute('class', 'card-text');
				createp.setAttribute('style', 'font-size:15px');
				var textp = document.createTextNode(clipboardlist[k]['clipboardData']);
				var createpdiv = createp.appendChild(textp);
				createbodydiv.appendChild(createp);
				var removebtn = document.createElement('Button');
				removebtn.setAttribute('class', 'btn btn-danger');
				removebtn.setAttribute('id', 'remove-btn');
				removebtn.setAttribute('onclick', 'removecliplist('+ '"' + k + '"' + ')');
				removebtn.appendChild(document.createTextNode('Remove'));
				createbodydiv.appendChild(removebtn);
				var copybtn = document.createElement('Button');
				copybtn.setAttribute('class', 'btn btn-primary');
				copybtn.setAttribute('id', 'copy-btn');
				copybtn.setAttribute('onclick', 'copycliplist('+ '"' + k + '"' + ')');
				copybtn.appendChild(document.createTextNode('Copy'));
				createbodydiv.appendChild(copybtn);
				if(k%2 == 0){
					div2.appendChild(createcard);
				}
				else{
					div3.appendChild(createcard);
				}
			}
			var cardlist = document.getElementById('showclip');
			cardlist.appendChild(div1);
			//cardlist.appendChild(div3);
		}
		else{
			addalert();
		}
}

function addalert(){
	var alertkey = document.createElement('div');
	alertkey.setAttribute("role", "alert");
	alertkey.setAttribute('class', "alert alert-danger");
	alertkey.setAttribute("id", "alert");
	alertkey.innerHTML = 'No Clipboard Data to Show... !!';
	document.getElementById('showclip').appendChild(alertkey);
}

function closeclipboard(){
	var cardlistclose = document.getElementById('showclip').getElementsByTagName('div');
	var carddownloadbtn = document.getElementById('div-download-btn').getElementsByTagName('Button');
	if(cardlistclose.length != 0){
		cardlistclose[0].remove();
	}
	if(carddownloadbtn.length != 0){
		carddownloadbtn[0].remove();
	}
}

function copycliplist(k){
	removealert();
	copyToClipboard(clipboardlist[k]['clipboardData']);
	snackbar('Clipboard Copied Successfully!! &#128578;');
}

function removecliplist(k){
	clipboardlist.splice(k,1);
	closeclipboard();
	clipboardview();
	snackbar('Clipboard deleted successfully!! &#128578;');
}

function downloadcliplist(){
	var downloadstring = ""
	downlistlen = clipboardlist.length;
	if(downlistlen != 0){
		for(var i = 0; i< downlistlen; i++){
			downloadstring = downloadstring + clipboardlist[i]['clipboardData'] + '\n';
		}
		download('lmrs-clipboard.txt', downloadstring);
	}
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function updateeditor(){
	texteditorlist = [];
	var editortext = document.getElementById('sourcecode');
	texteditorlist = editortext.value.split('\n');
	if(texteditorlist.length != 0){
		snackbar('Updated Successfully!! &#9997;');
	}
	else{
		snackbar('Failed to Update!! &#128546; Your Editor is Empty');
	}
}

function downloadeditor(){
	var textedit = "";
	var editorlen = texteditorlist.length;
	if(editorlen != 0){
		for(var i = 0; i < editorlen; i++){
			textedit = textedit + texteditorlist[i] + '\n';
		}
		download('lmrs-editor.txt', textedit);
		snackbar('Downloading...');
	}
	else{
		snackbar('Sorry We are not processing your download request!!.. Your Editor is Empty.. &#129296;');
	}
}

function snackbar(str) {
  var x = document.getElementById("snackbar");
  x.innerHTML = str;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

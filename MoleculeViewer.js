var CPK = {"h":[255,255,255],"he":[217,255,255],"li":[204,128,255],"be":[194,255,0],"b":[255,181,181],"c":[144,144,144],"n":[48,80,248],"o":[255,13,13],"f":[144,224,80],"ne":[179,227,245],"na":[171,92,242],"mg":[138,255,0],"al":[191,166,166],"si":[240,200,160],"p":[255,128,0],"s":[255,255,48],"cl":[31,240,31],"ar":[128,209,227],"k":[143,64,212],"ca":[61,255,0],"sc":[230,230,230],"ti":[191,194,199],"v":[166,166,171],"cr":[138,153,199],"mn":[156,122,199],"fe":[224,102,51],"co":[240,144,160],"ni":[80,208,80],"cu":[200,128,51],"zn":[125,128,176],"ga":[194,143,143],"ge":[102,143,143],"as":[189,128,227],"se":[255,161,0],"br":[166,41,41],"kr":[92,184,209],"rb":[112,46,176],"sr":[0,255,0],"y":[148,255,255],"zr":[148,224,224],"nb":[115,194,201],"mo":[84,181,181],"tc":[59,158,158],"ru":[36,143,143],"rh":[10,125,140],"pd":[0,105,133],"ag":[192,192,192],"cd":[255,217,143],"in":[166,117,115],"sn":[102,128,128],"sb":[158,99,181],"te":[212,122,0],"i":[148,0,148],"xe":[66,158,176],"cs":[87,23,143],"ba":[0,201,0],"la":[112,212,255],"ce":[255,255,199],"pr":[217,255,199],"nd":[199,255,199],"pm":[163,255,199],"sm":[143,255,199],"eu":[97,255,199],"gd":[69,255,199],"tb":[48,255,199],"dy":[31,255,199],"ho":[0,255,156],"er":[0,230,117],"tm":[0,212,82],"yb":[0,191,56],"lu":[0,171,36],"hf":[77,194,255],"ta":[77,166,255],"w":[33,148,214],"re":[38,125,171],"os":[38,102,150],"ir":[23,84,135],"pt":[208,208,224],"au":[255,209,35],"hg":[184,184,208],"tl":[166,84,77],"pb":[87,89,97],"bi":[158,79,181],"po":[171,92,0],"at":[117,79,69],"rn":[66,130,150],"fr":[66,0,102],"ra":[0,125,0],"ac":[112,171,250],"th":[0,186,255],"pa":[0,161,255],"u":[0,143,255],"np":[0,128,255],"pu":[0,107,255],"am":[84,92,242],"cm":[120,92,227],"bk":[138,79,227],"cf":[161,54,212],"es":[179,31,212],"fm":[179,31,186],"md":[179,13,166],"no":[189,13,135],"lr":[199,0,102],"rf":[204,0,89],"db":[209,0,79],"sg":[217,0,69],"bh":[224,0,56],"hs":[230,0,46],"mt":[235,0,38],"ds":[235,0,38],"rg":[235,0,38],"cn":[235,0,38],"uut":[235,0,38],"uuq":[235,0,38],"uup":[235,0,38],"uuh":[235,0,38],"uus":[235,0,38],"uuo":[235,0,38]};

var masses = {"h":1.008,"he":4.003,"li":6.941,"be":9.012,"b":10.81,"c":12.01,"n":14.01,"o":16.00,"f":19.00,"ne":20.18,"na":22.99,"mg":24.31,"al":26.98,"si":28.09,"p":30.97,"s":32.07,"cl":35.45,"ar":39.95,"k":39.10,"ca":40.08,"sc":44.96,"ti":47.88,"v":50.94,"cr":52.00,"mn":54.94,"fe":55.85,"co":58.47,"ni":58.69,"cu":63.55,"zn":65.39,"ga":69.72,"ge":72.59,"as":74.92,"se":78.96,"br":79.90,"kr":83.80,"rb":85.47,"sr":87.62,"y":88.91,"zr":91.22,"nb":92.91,"mo":95.94,"tc":98,"ru":101.1,"rh":102.9,"pd":106.4,"ag":107.9,"cd":112.4,"in":114.8,"sn":118.7,"sb":121.8,"te":127.6,"i":126.9,"xe":131.3,"cs":132.9,"ba":137.3,"la":138.9,"ce":140.1,"pr":140.9,"nd":144.2,"pm":147,"sm":150.4,"eu":152.0,"gd":157.3,"tb":158.9,"dy":162.5,"ho":164.9,"er":167.3,"tm":168.9,"yb":173.0,"lu":175.0,"hf":178.5,"ta":180.9,"w":183.9,"re":186.2,"os":190.2,"ir":190.2,"pt":195.1,"au":197.0,"hg":200.5,"tl":204.4,"pb":207.2,"bi":209.0,"po":210,"at":210,"rn":222,"fr":223,"ra":226,"ac":227,"th":232.0,"pa":231,"u":238,"np":237,"pu":242,"am":243,"cm":247,"bk":247,"cf":249,"es":254,"fm":253,"md":256,"no":254,"lr":257,"rf":257,"db":260,"sg":263,"bh":262,"hs":265,"mt":266};


var preset_base = {"Al":"a1\t2.025\t2.025\t0\na2\t0\t2.025\t2.025\na3\t2.025\t0\t2.025", "NaCl":"a1\t2.82\t2.82\t0\na2\t0\t2.82\t2.82\na3\t2.82\t0\t2.82","CsCl":"a1\t4.12\t0\t0\na2\t0\t4.12\t0\na3\t0\t0\t4.12","SrTiO3":"a1\t3.91\t0\t0\na2\t0\t3.91\t0\na3\t0\t0\t3.91","GaAs":"a1\t2.827\t2.827\t0\na2\t0\t2.827\t2.827\na3\t2.827\t0\t2.827","GaN":"a1\t1.595\t-2.762\t0\na2\t1.595\t2.762\t0\na3\t0\t0\t5.185"};

var preset_atoms = {"Al":"Al\t0\t0\t0", "NaCl":"Na\t0\t0\t0\nCl\t0.5\t0.5\t0.5","CsCl":"Cs\t0\t0\t0\nCl\t0.5\t0.5\t0.5","SrTiO3":"Sr\t0\t0\t0\nTi\t0\t0\t0\nO\t0.5\t0.5\t0\nO\t0\t0.5\t0.5\nO\t0.5\t0\t0.5","GaAs":"Ga\t0\t0\t0\nAs\t0.25\t0.25\t0.25","GaN":"Ga\t1/3\t2/3\t0\nGa\t2/3\t1/3\t1/2\nN\t1/3\t2/3\t0.376\nN\t2/3\t1/3\t0.876"};

var camera, scene, renderer;
var controls;
var root;

var objects = [];
var tmpVec1 = new THREE.Vector3();
var tmpVec2 = new THREE.Vector3();
var tmpVec3 = new THREE.Vector3();
var tmpVec4 = new THREE.Vector3();
var base = [];

var bg = 0;
var rotation = 0;
	

var visualizationType = 0;

var atomsize = 100;

var colorSpriteMap = {};
var baseSprite = document.createElement( 'img' );

var presets = document.getElementById( "presets" );

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 20, 800/600, 1, 5000 );
	
	camera.position.x = 5000;
	camera.position.y = 5000;
	camera.position.z = 5000;
	

	scene = new THREE.Scene();

	root = new THREE.Object3D();
	scene.add( root );
	
	//

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( 800, 600 );
	document.getElementById( 'canvas' ).appendChild( renderer.domElement );

	//

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.addEventListener( 'change', render );

	//

	baseSprite.onload = function () {
		createMenu();
		plotCell();
	};

	baseSprite.src = 'ball.png';
}

//


function createMenu() {
	var b_a = document.getElementById( "b_a" );
	var b_u = document.getElementById( "b_b" );
	var b_bg = document.getElementById( "b_bg" );
	var b_rot = document.getElementById( "b_rot" );
	var b_size = document.getElementById( "b_size" );
	var b_asize = document.getElementById( "b_asize" );
	
	b_a.addEventListener( 'click', function() { toggleAxis() } );
	b_u.addEventListener( 'click', function() { toggleUnitCell() } );
	b_bg.addEventListener( 'click', function() { toggleBackground();});
	b_rot.addEventListener( 'click', function() { rotation = 1 - rotation;});
	b_size.addEventListener( 'click', function() { setSize()});
	b_asize.addEventListener( 'click', function() { atomsize = $('#plot_asize').val(); plotCrystal();});
}

function toggleBackground() {
	$('#canvas').toggleClass('white')
}

function toggleAxis() {
	$('.axis').toggle();
	$('.label').toggle();	
}

function toggleUnitCell() {
	$('.cell').toggle();
	
}


function colorify( ctx, width, height, color, a ) {

	var r = color.r;
	var g = color.g;
	var b = color.b;

	var imageData = ctx.getImageData( 0, 0, width, height );
	var data = imageData.data;

	for ( var y = 0; y < height; y ++ ) {

		for ( var x = 0; x < width; x ++ ) {

			var index = ( y * width + x ) * 4;

			data[ index ]     *= r;
			data[ index + 1 ] *= g;
			data[ index + 2 ] *= b;
			data[ index + 3 ] *= a;

		}

	}

	ctx.putImageData( imageData, 0, 0 );

}

function imageToCanvas( image ) {

	var width = image.width;
	var height = image.height;

	var canvas = document.createElement( 'canvas' );

	canvas.width = width;
	canvas.height = height;

	var context = canvas.getContext( '2d' );
	context.drawImage( image, 0, 0, width, height );

	return canvas;

}

//


function setSize() {

	x = $('#plot_x').val();
	y = $('#plot_y').val();
	
	$('#canvas').width(x);
	$('#canvas').height(y);
	
	
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( x, y );

	render();

}

function animate() {

	requestAnimationFrame( animate );
	controls.update();

	var time = Date.now() * 0.0004;

	if (rotation) {
		root.rotation.x = time;
		root.rotation.y = time * 0.7;
	}

	render();

}


function render() {
	renderer.render( scene, camera );
}

//Plots unit cell
function plotCell() {
	console.log("plotCell()")
	
	// Format input
	var tmp_base = $('#input_base').val()
	tmp_base = tmp_base.replace(/\s{2,}/g, ' ');
	tmp_base = tmp_base.replace(' ', '\t');
	$('#input_base').val(tmp_base)
	
	var tmp_atoms = $('#input_atoms').val()
	tmp_atoms = tmp_atoms.replace(/\s{2,}/g, ' ');
	tmp_atoms = tmp_atoms.replace(' ', '\t');
	$('#input_atoms').val(tmp_atoms)
	
	//
	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		object.parent.remove( object );

	}

	objects = [];
	
	//Read base vectors
	base = [];
	var transform = new THREE.Matrix3();
	lines = $('#input_base').val().split('\n');
	for(var i = 0;i < lines.length;i++){
		var atom = lines[ i ].split("\t");
		
		var x = eval(atom[1]);
		var y = eval(atom[2]);
		var z = eval(atom[3]);
												
		var vect = new THREE.Vector3(x, y, z);
		
		transform.elements[3*i + 0] = x;
		transform.elements[3*i + 1] = y;
		transform.elements[3*i + 2] = z;
		
			
		base.push( vect );
	}
	
	
	//Read atom positions
	geometry = new THREE.Geometry();
		
	geometry.elements = [];
	
	lines = $('#input_atoms').val().split('\n');
	for(var i = 0;i < lines.length;i++){
		var atom = lines[ i ].split("\t");
		
		//Coefficients of base vectors
		var n1 = eval(atom[1]);
		var n2 = eval(atom[2]);
		var n3 = eval(atom[3]);

		var symbol = atom[0].toLowerCase();
												
		var position = new THREE.Vector3(n1, n2, n3);
		position.applyMatrix3(transform);
			
		geometry.vertices.push( position );
		var color = new THREE.Color();
		r = CPK[symbol][0] / 255;
		g = CPK[symbol][1] / 255;
		b = CPK[symbol][2] / 255;
		
		color.setRGB( r, g, b );

		geometry.colors.push( color );
		geometry.elements.push( atom[ 0 ] );
	
	}
	
	//Add atoms to root
	for ( var i = 0; i < geometry.vertices.length; i ++ ) {

		var position = geometry.vertices[ i ];
		var color = geometry.colors[ i ];
		var element = geometry.elements[ i ];

		if ( ! colorSpriteMap[ element ] ) {

			var canvas = imageToCanvas( baseSprite );
			var context = canvas.getContext( '2d' );

			colorify( context, canvas.width, canvas.height, color, 1 );

			var dataUrl = canvas.toDataURL();

			colorSpriteMap[ element ] = dataUrl;

		}

		colorSprite = colorSpriteMap[ element ];

		var atom = document.createElement( 'img' );
		atom.src = colorSprite;

		var object = new THREE.CSS3DSprite( atom );
		object.position.copy( position );
		object.position.multiplyScalar( atomsize );

		object.matrixAutoUpdate = false;
		object.updateMatrix();
		
		root.add( object );
		objects.push( object );
		
		var label = document.createElement( 'div' );
		label.innerHTML = geometry.elements[i];
		label.className = "label";

		var object = new THREE.CSS3DSprite( label );
		object.position.copy( position );
		object.position.multiplyScalar( atomsize );

		object.matrixAutoUpdate = false;
		object.updateMatrix();
		
		root.add( object );
		objects.push( object );

	}
				
	//Add axis
	var start = new THREE.Vector3(0,0,0);

	var axislength = 0;
	for (i = 0; i < 3; i++)
		if(axislength < base[i].length())
			axislength = base[i].length();
	axislength = axislength + 1;
			
	var myaxis = [new THREE.Vector3(axislength,0,0), new THREE.Vector3(0,axislength,0), new THREE.Vector3(0,0,axislength)];
	var axisnames = ["X", "Y", "Z"];
				
	for ( var i = 0; i < 3; i ++ ) {

		var end = myaxis[i];
		start.multiplyScalar( atomsize );
		end.multiplyScalar( atomsize );

		tmpVec1.subVectors( end, start );
		var bondLength = tmpVec1.length();

		var bond = document.createElement( 'div' );
		bond.className = "axis";
		bond.style.height = bondLength + "px";

		var object = new THREE.CSS3DObject( bond );
		object.position.copy( start );
		object.position.lerp( end, 0.5 );

		
		//

		var axis = tmpVec2.set( 0, 1, 0 ).cross( tmpVec1 );
		var radians = Math.acos( tmpVec3.set( 0, 1, 0 ).dot( tmpVec4.copy( tmpVec1 ).normalize() ) );

		var objMatrix = new THREE.Matrix4().makeRotationAxis( axis.normalize(), radians );
		object.matrix = objMatrix;
		object.rotation.setFromRotationMatrix( object.matrix, object.rotation.order );

		object.matrixAutoUpdate = false;
		object.updateMatrix();

		root.add( object );

		objects.push( object );

		//

		var bond = document.createElement( 'div' );
		bond.className = "axis";
		bond.style.height = bondLength + "px";

		var joint = new THREE.Object3D( bond );
		joint.position.copy( start );
		joint.position.lerp( end, 0.5 );

		joint.matrix.copy( objMatrix );
		joint.rotation.setFromRotationMatrix( joint.matrix, joint.rotation.order );

		joint.matrixAutoUpdate = false;
		joint.updateMatrix();

		var object = new THREE.CSS3DObject( bond );
		object.rotation.y = Math.PI/2;

		object.matrixAutoUpdate = false;
		object.updateMatrix();

		object.userData.joint = joint;

		joint.add( object );
		root.add( joint );

		objects.push( object );
		
		//Labels
		
		var label = document.createElement( 'div' );
		label.innerHTML = axisnames[i];
		label.className = "label";
		
		var object = new THREE.CSS3DSprite( label );
		object.position.copy( end );;

		object.matrixAutoUpdate = false;
		object.updateMatrix();
		
		root.add( object );
		
		objects.push( object );
		
		calculations();
	
	}
	
	//Add unit cell	
	var starts = [new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0),
				 new THREE.Vector3(0,0,0)]
				 
	//starts[0:2] is zero vector
	starts[3].add(base[0]);
	starts[4].add(base[0]);
	starts[5].add(base[1]);
	starts[6].add(base[1]);
	starts[7].add(base[2]);
	starts[8].add(base[2]);
	
	var ends =	[new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0),
				new THREE.Vector3(0,0,0)]
				
	ends[0].add(base[0]);
	ends[1].add(base[1]);
	ends[2].add(base[2]);
	ends[3].addVectors(starts[3], base[1]);
	ends[4].addVectors(starts[4], base[2]);
	ends[5].addVectors(starts[5], base[0]);
	ends[6].addVectors(starts[6], base[2]);
	ends[7].addVectors(starts[7], base[0]);
	ends[8].addVectors(starts[8], base[1]);
	
	starts[9] = ends[3];
	starts[10] = ends[4];
	starts[11] = ends[6];
	
	ends[9].addVectors(starts[9], base[2]);
	ends[10].addVectors(starts[10], base[1]);
	ends[11].addVectors(starts[11], base[0]);
	
	for ( var i = 0; i < 12; i ++ ) {

		var start = new THREE.Vector3()
		var end = new THREE.Vector3()
		
		start.copy(starts[i]);
		end.copy(ends[i]);
		
		start.multiplyScalar( atomsize );
		end.multiplyScalar( atomsize );

		tmpVec1.subVectors( end, start );
		var bondLength = tmpVec1.length();

		var bond = document.createElement( 'div' );
		bond.className = "cell";
		bond.style.height = bondLength + "px";

		var object = new THREE.CSS3DObject( bond );
		object.position.copy( start );
		object.position.lerp( end, 0.5 );

		
		//

		var axis = tmpVec2.set( 0, 1, 0 ).cross( tmpVec1 );
		var radians = Math.acos( tmpVec3.set( 0, 1, 0 ).dot( tmpVec4.copy( tmpVec1 ).normalize() ) );

		var objMatrix = new THREE.Matrix4().makeRotationAxis( axis.normalize(), radians );
		object.matrix = objMatrix;
		object.rotation.setFromRotationMatrix( object.matrix, object.rotation.order );

		object.matrixAutoUpdate = false;
		object.updateMatrix();

		root.add( object );

		objects.push( object );

		//

		var bond = document.createElement( 'div' );
		bond.className = "cell";
		bond.style.height = bondLength + "px";

		var joint = new THREE.Object3D( bond );
		joint.position.copy( start );
		joint.position.lerp( end, 0.5 );

		joint.matrix.copy( objMatrix );
		joint.rotation.setFromRotationMatrix( joint.matrix, joint.rotation.order );

		joint.matrixAutoUpdate = false;
		joint.updateMatrix();

		var object = new THREE.CSS3DObject( bond );
		object.rotation.y = Math.PI/2;

		object.matrixAutoUpdate = false;
		object.updateMatrix();

		object.userData.joint = joint;

		joint.add( object );
		root.add( joint );

		objects.push( object );
		

	}
	
	render();

}

//Calls PlotCell() and then plots only the atoms of the unit cell translated n times to all directions
function plotCrystal(n) {
	plotCell();
	
	//Add atoms to root
	for(var u = -n; u <= n; u++) {
	for(var v = -n; v <= n; v++) {
	for(var w = -n; w <= n; w++) {
	
		

		if(!(u==0 && v == 0 && w == 0)) // Skip re-plotting the cell at origin
		for ( var i = 0; i < geometry.vertices.length; i ++ ) {
			var position = geometry.vertices[ i ].clone()
			position.add(base[0].clone().multiplyScalar(u));
			position.add(base[1].clone().multiplyScalar(v));
			position.add(base[2].clone().multiplyScalar(w));
			
			var color = geometry.colors[ i ];
			var element = geometry.elements[ i ];

			if ( ! colorSpriteMap[ element ] ) {

				var canvas = imageToCanvas( baseSprite );
				var context = canvas.getContext( '2d' );

				colorify( context, canvas.width, canvas.height, color, 1 );

				var dataUrl = canvas.toDataURL();

				colorSpriteMap[ element ] = dataUrl;

			}

			colorSprite = colorSpriteMap[ element ];

			var atom = document.createElement( 'img' );
			atom.src = colorSprite;

			var object = new THREE.CSS3DSprite( atom );
			object.position.copy( position );
			object.position.multiplyScalar( atomsize );

			object.matrixAutoUpdate = false;
			object.updateMatrix();
			
			root.add( object );
			objects.push( object );

		}
	}
	}
	}
	render();
}

function preset(crystal) {
	$('#input_base').val(preset_base[crystal]);
	$('#input_atoms').val(preset_atoms[crystal]);
	plotCell();
}

function calculations() {
	//Volume by spat product
	var tmp = new THREE.Vector3( 0, 0, 0 );
	tmp.crossVectors(base[0],base[1])
	var volume = tmp.dot(base[2])
	
	//Mass by summing over atom weights in unit cell
	var mass = 0;
	lines = $('#input_atoms').val().split('\n');
	for(var i = 0;i < lines.length;i++){
		var atom = lines[ i ].split("\t");
		var symbol = atom[0].toLowerCase();
		mass += masses[symbol];
	}
	
	var density = mass/volume;
	
	$('#calc_volume').text(volume.toFixed(3));
	$('#calc_mass').text(mass.toFixed(3));
	$('#calc_density').text(density.toFixed(3));
}

//Enable tabs for textareas
var textareas = document.getElementsByTagName('textarea');
var count = textareas.length;
for(var i=0;i<count;i++){
	textareas[i].onkeydown = function(e){
		if(e.keyCode==9 || e.which==9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionEnd = s+1; 
		}
	}
}

//FPS Meter
javascript:(function(){var script=document.createElement('script');script.src='//rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.body.appendChild(script);script=document.createElement('script');script.innerHTML='var interval=setInterval(function(){if(typeof Stats==\'function\'){clearInterval(interval);var stats=new Stats();stats.domElement.style.position=\'fixed\';stats.domElement.style.left=\'0px\';stats.domElement.style.bottom=\'0px\';stats.domElement.style.zIndex=\'10000\';document.body.appendChild(stats.domElement);setInterval(function(){stats.update();},1000/60);}},100);';document.body.appendChild(script);})();